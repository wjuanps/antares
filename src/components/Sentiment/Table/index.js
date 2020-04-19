import React from "react";

const Table = ({ data, compare = false }) => {
  return (
    <section className="features-icons bg-light">
      <div className="container">
        {compare ? (
          <TableCompare data={data} />
        ) : (
          <TableSentiment data={data} />
        )}
      </div>
    </section>
  );
};

const TableSentiment = ({ data }) => {
  return (
    <div className="row table-responsive">
      <table className="table table-hover table-striped" id="table">
        <thead>
          <tr>
            <th style={{ borderTop: "none" }} colSpan={3}>
              <h3 className="text-info">
                <i className="fa fa-twitter"></i> Alguns tweets analisados
              </h3>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.tweets.map((tweet) => (
            <Tweet key={tweet.id} tweet={tweet} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TableCompare = ({ data }) => {
  const datas = [data.a, data.b];
  console.log(datas);

  return datas.map((data, i) => (
    <div key={i} className="row table-responsive mb-5">
      <table className="table table-hover table-striped" id="table">
        <thead>
          <tr>
            <th style={{ borderTop: "none" }} colSpan={3}>
              <h3 className="text-info">
                <i className="fa fa-twitter"></i> Alguns tweets analisados para{" "}
                {data.text.replace(/\-+/g, " ")}
              </h3>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.tweets.map((tweet) => (
            <Tweet key={tweet.id} tweet={tweet} />
          ))}
        </tbody>
      </table>
    </div>
  ));
};

const Tweet = ({ tweet }) => {
  return (
    <tr>
      <td>
        <a
          href={`https://twitter.com/${tweet.userProfile}`}
          className="btn btn-link"
          target="_blank"
        >
          <img className="rounded-circle" src={tweet.profileImage} alt="img" />
        </a>
      </td>
      <td>
        <a
          href={`https://twitter.com/${tweet.userProfile}`}
          className="btn btn-link text-muted"
          target="_blank"
        >
          {tweet.userName}
        </a>
      </td>
      <td>
        {tweet.text}
        <a
          href={`https://twitter.com/i/web/status/${tweet.id}`}
          className="btn btn-link"
          target="_blank"
        >
          Ver original
        </a>
      </td>
    </tr>
  );
};

export default Table;
