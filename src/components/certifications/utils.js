export const getContentCerfitication = (certification) => {
    return (
      <span>
        <strong>Expedition: </strong>
        {certification.expedition} <br />{" "}
        {certification.expiration ? (
          <>
            <strong>Expiration: </strong>
            {certification.expiration}
          </>
        ) : (
          ""
        )}
        {certification.id ? (
          <>
            <strong>id: </strong>
            {certification.id}
          </>
        ) : (
          ""
        )}{" "}
      </span>
    );
  };