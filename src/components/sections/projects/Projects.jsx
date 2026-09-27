import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import projects from "../../../data/projects.json";
import { TechIcon } from "../../commons/icons/Icons";
import { useLang } from "../../../utils/LangContext";
import { useInView } from "../../../utils/useInView";
import { SectionHeader } from "../../commons/section/SectionHeader";
import { Tabs } from "../../commons/tabs/Tabs";
import "./projects.css";

const INITIAL_COUNT = 6;

// Tab id -> category in projects.json (null = all)
const FILTERS = { all: null, web: "Web", data: "Data" };

const ProjectCard = ({ project, tp, index }) => {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} className={`card-dm project-card fade-up ${visible ? "visible" : ""}`} style={{ transitionDelay: `${(index % 3) * 0.12}s` }}>
      <div className="project-header">
        <p className="project-company">{tp.company}</p>
        <span className="card-meta">{project.period}</span>
      </div>
      <h3 className="project-name">{tp.name}</h3>
      <p className="project-desc">{tp.description}</p>
      <div className="project-stack">
        {project.stack.map((s, i) => (
          <span key={i} className="chip">
            <TechIcon name={s.name} onDark />
            {s.name}
          </span>
        ))}
      </div>
    </div>
  );
};

const ProjectList = ({ category, t }) => {
  const [expanded, setExpanded] = useState(false);
  const list = projects.filter((p) => !category || p.categories.includes(category));
  const shown = expanded ? list : list.slice(0, INITIAL_COUNT);
  return (
    <>
      <Row>
        {shown.map((project, i) => {
          const idx = projects.indexOf(project);
          return (
            <Col xs={12} md={6} lg={4} key={idx} className="col-gap">
              <ProjectCard project={project} tp={t.projects.items[idx]} index={i} />
            </Col>
          );
        })}
      </Row>
      {list.length > INITIAL_COUNT && (
        <div className="text-center mt-3">
          <button className="btn-dm btn-dm-ghost" onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>
            {expanded ? t.projects.showLess : `${t.projects.showAll} (${list.length})`}
          </button>
        </div>
      )}
    </>
  );
};

export const Projects = () => {
  const { t } = useLang();
  const [filter, setFilter] = useState("all");
  return (
    <section className="section" id="projects">
      <Container>
        <SectionHeader index={4} eyebrow={t.nav.projects} title={t.projects.title} />
        <Tabs
          className="project-tabs"
          label={t.projects.title}
          tabs={Object.keys(FILTERS).map((id) => ({ id, label: t.projects.tabs[id] }))}
          active={filter}
          onChange={setFilter}
        />
        {/* One list; the key resets "show all" when the filter changes */}
        <ProjectList key={filter} category={FILTERS[filter]} t={t} />
      </Container>
    </section>
  );
};
