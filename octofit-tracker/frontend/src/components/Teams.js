import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://animated-space-happiness-x7jvqqq4wvrcvqrq-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div>
      <h1 className="mb-4">Teams</h1>
      {teams.map(team => (
        <div key={team.id} className="mb-5">
          <h2>Team: {team.name}</h2>
          <table className="table table-bordered table-hover">
            <thead className="table-secondary">
              <tr>
                <th>Member ID</th>
                <th>Member Name</th>
              </tr>
            </thead>
            <tbody>
              {team.members.map(member => (
                <tr key={member.id}>
                  <td>{member.username}</td>
                  <td>{member.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default Teams;