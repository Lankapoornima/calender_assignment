# 📅 Interactive Calendar Web Application

A sleek, interactive calendar web application inspired by Google Calendar, built using **React**, **Tailwind CSS**, and **Day.js**. This app enables users to view the current month, navigate between months, and visualize scheduled events loaded from a static JSON file.

---

## ✅ Features

- 📆 Displays the current month and year in a responsive grid layout.
- 🔁 Navigation buttons to switch between previous and next months.
- 🎯 Highlights the current date for better usability.
- 📋 Loads and displays events from a static JSON file.
- 🕒 Shows event details including title, date, time, and duration.
- 🎨 Handles overlapping events with visual cues and color coding.

---

## 📊 Example Event JSON Format (`public/events.json`)

```json
[
  {
    "title": "Team Meeting",
    "date": "2025-06-14",
    "time": "10:00",
    "duration": "1h"
  },
  {
    "title": "Client Call",
    "date": "2025-06-14",
    "time": "10:30",
    "duration": "30m"
  },
  {
    "title": "Project Deadline",
    "date": "2025-06-20",
    "time": "23:59",
    "duration": "All Day"
  }
]
## 1.Clone the repository
git clone https://github.com/yourusername/calendar-app.git
cd calendar-app

## 2.Install dependencies
npm install
3. Start the development server
npm run dev
