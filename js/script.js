
const events = [
    {
        name: "Web Development Workshop",
        type: "Workshop",
        date: "2026-12-05",
        time: "10:00 AM",
        venue: "Computer Science Lab",
        description: "Learn HTML, CSS and JavaScript basics."
    },
    {
        name: "Artificial Intelligence Seminar",
        type: "Seminar",
        date: "2026-12-12",
        time: "11:00 AM",
        venue: "Main Auditorium",
        description: "Explore AI technologies and future trends."
    },
    {
        name: "Annual Cultural Fest",
        type: "Cultural",
        date: "2026-12-20",
        time: "09:00 AM",
        venue: "College Ground",
        description: "Enjoy music, dance and cultural performances."
    },
    {
        name: "Python Programming Workshop",
        type: "Workshop",
        date: "2027-01-10",
        time: "10:30 AM",
        venue: "Seminar Hall",
        description: "Learn Python programming with practical examples."
    }
];

function displayEvents(category = "All") {
    const container = document.getElementById("eventContainer");
    container.innerHTML = "";

    const filteredEvents = category === "All"
        ? events
        : events.filter(event => event.type === category);

    filteredEvents.forEach(event => {
        const card = document.createElement("div");
        card.className = "event-card";

        card.innerHTML = `
            <h3>${event.name}</h3>
            <p><strong>Category:</strong> ${event.type}</p>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Time:</strong> ${event.time}</p>
            <p><strong>Venue:</strong> ${event.venue}</p>
            <p>${event.description}</p>
            <button onclick="registerEvent('${event.name}')">
                Register Now
            </button>
        `;

        container.appendChild(card);
    });
}

function filterEvents(category) {
    displayEvents(category);
}

function registerEvent(eventName) {
    alert("You selected: " + eventName +
        ". Registration details will be announced soon!");
}

displayEvents();
