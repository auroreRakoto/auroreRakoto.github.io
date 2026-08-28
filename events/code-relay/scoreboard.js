const API_URL =
    "http://10.2.2.6:4242";


async function loadState() {

    try {

        const response =
            await fetch(
                `${API_URL}/api/state`
            );


        if (!response.ok) {
            throw new Error(
                "Server error"
            );
        }


        const state =
            await response.json();


        renderState(state);

    } catch (error) {

        document
            .getElementById(
                "relay-status"
            )
            .textContent =
            "SERVER OFFLINE";

    }

}


function renderState(state) {

    document
        .getElementById(
            "relay-status"
        )
        .textContent =
        state.state ??
        "WAITING";


    document
        .getElementById(
            "round"
        )
        .textContent =
        state.round ?? "-";


    document
        .getElementById(
            "subject"
        )
        .textContent =
        state.subject?.title ??
        "Waiting...";


    renderTimer(
        state.remaining ?? 0
    );


    renderTeams(
        state.teams ?? []
    );

}


function renderTimer(seconds) {

    const minutes =
        Math.floor(
            seconds / 60
        );


    const remainingSeconds =
        seconds % 60;


    document
        .getElementById(
            "timer"
        )
        .textContent =
        `${String(minutes).padStart(2, "0")}:` +
        `${String(remainingSeconds).padStart(2, "0")}`;

}


function renderTeams(teams) {

    const container =
        document.getElementById(
            "teams"
        );


    container.innerHTML = "";


    teams.forEach(
        (team, index) => {

            const row =
                document.createElement(
                    "a"
                );


            row.className =
                "relay-team";


            row.href =
                `/events/code-relay/team/?team=${encodeURIComponent(team.name)}`;


            row.innerHTML = `
                <span class="team-rank">
                    #${index + 1}
                </span>

                <span class="team-name">
                    ${team.name}
                </span>

                <span class="team-score">
                    ${team.score} pts
                </span>
            `;


            container.appendChild(
                row
            );

        }
    );

}


loadState();

setInterval(
    loadState,
    1000
);