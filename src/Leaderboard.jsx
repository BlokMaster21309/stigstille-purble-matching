import { useState, useEffect } from "react";

function Leaderboard({ difficulty, reload, setReload }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    async function getScores() {
      setLoading(true);

      try {
        const res = await fetch(
          `https://api.rmamet.xyz/memoryscores?difficulty=${encodeURIComponent(difficulty)}`,
          // `https://api.rmamet.xyz/memoryscores?difficulty=${encodeURIComponent('Non-Existant')}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );

        const json = await res.json();

        setData(json);

        // setMessage(JSON.stringify(data?.data));
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }

    getScores();
    if (reload) {
      setReload(false);
    }
  }, [difficulty, reload, setReload]);

  return (
    <div className="text-white m-4 border-2 border-white border-solid rounded-2xl p-4">
      <h2 className="text-3xl">Leaderboard!</h2>
      {difficulty}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ol className="list-decimal pl-5">
          {data && data.data && data.data.length > 0 ? (
            data.data.map((item) => (
              <li key={item.id} className="user-score">
                Score: {item.score} - {item.uname}
              </li>
            ))
          ) : (
            <p>No data available.</p>
          )}
        </ol>
      )}
    </div>
  );
}

export default Leaderboard;
