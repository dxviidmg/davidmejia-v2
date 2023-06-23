export const getContentCerfitication = (certification) => {
  return (
    <span>
      <strong>Expedition: </strong>
      {certification.expedition}

      {certification.expiration && (
        <>
          <br />
          <strong>Expiration: </strong>
          {certification.expiration}
        </>
      )}
      {certification.id && (
        <>
          <br />
          <strong>Credential: </strong>
          {certification.id}
        </>
      )}
    </span>
  );
};
