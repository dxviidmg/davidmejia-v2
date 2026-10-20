'use client';

import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import projects from "../../../data/projects.json";
import { TechIcon } from "../../commons/icons/Icons";
import { useLang } from "../../../utils/LangContext";
import { SectionHeader } from "../../commons/section/SectionHeader";
import { Tabs } from "../../commons/tabs/Tabs";
import { Reveal } from "../../commons/reveal/Reveal";
import { formatPeriod } from "../../../utils/dateUtils";
import "./projects.css";

const INITIAL_COUNT = 6;

// Tab id -> category in projects.json (null = all)
const FILTERS = { all: null, web: "Web", data: "Data" };

const ProjectCard = ({ project, tp, t, lang, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <Reveal className="card-dm project-card" delay={(index % 3) * 0.12}>
      <div className="project-header">
        <p className="project-company">{tp.company}</p>
        <span className="card-meta">{formatPeriod(project.start, project.end, lang, t.experience.present)}</span>
      </div>
      <h3 className="project-name">{tp.name}</h3>
      <p className="project-desc">{tp.description}</p>
      <div className="project-tech">
        <button className="link-more" onClick={() => setOpen(!open)} aria-expanded={open}>
          {open ? `− ${t.projects.hideTech}` : `+ ${t.projects.showTech}`}
        </button>
        <div className={`project-stack-wrap ${open ? "is-open" : ""}`}>
          <div className="project-stack" aria-hidden={!open}>
            {project.stack.map((name) => (
              <span key={name} className="chip">
                <TechIcon name={name} onDark />
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
};

const ProjectList = ({ category, t, lang }) => {
  const [expanded, setExpanded] = useState(false);
  const list = projects.filter((p) => !category || p.categories.includes(category));
  const shown = expanded ? list : list.slice(0, INITIAL_COUNT);
  return (
    <>
      <Row>
        {shown.map((project, i) => (
          <Col xs={12} md={6} lg={4} key={project.id} className="col-gap">
            <ProjectCard project={project} tp={t.projects.items[project.id]} t={t} lang={lang} index={i} />
          </Col>
        ))}
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
  const { t, lang } = useLang();
  const [filter, setFilter] = useState("all");
  return (
    <section className="section" id="projects">
      <Container>
        <SectionHeader title={t.projects.title} />
        <Tabs
          className="tabs-full project-tabs"
          label={t.projects.title}
          tabs={Object.keys(FILTERS).map((id) => ({ id, label: t.projects.tabs[id] }))}
          active={filter}
          onChange={setFilter}
        />
        {/* One list; the key resets "show all" when the filter changes */}
        <ProjectList key={filter} category={FILTERS[filter]} t={t} lang={lang} />
      </Container>
    </section>
  );
};
