{
  "name": "Orlanthi Calendar",
  "id": "glorantha-orlanthi-calendar",
  "description": "The Primary Calendar in use by the Orlanthi Culture of Glorantha",
  "years": {
    "yearZero": 0,
    "firstWeekday": 0,
    "leapYear": {
      "leapStart": 0,
      "leapInterval": 0
    }
  },
  "months": {
    "values": [
      {	"name": "Sea Season", "abbreviation": "Sea", "ordinal": 1, "days": 56 },
	  {	"name": "Fire Season", "abbreviation": "Fire", "ordinal": 2, "days": 56 },
	  {	"name": "Earth Season", "abbreviation": "Earth", "ordinal": 3, "days": 56 },
	  {	"name": "Dark Season", "abbreviation": "Dark", "ordinal": 4, "days": 56 },
	  {	"name": "Storm Season", "abbreviation": "Storm", "ordinal": 5, "days": 56 },
	  {	"name": "Sacred Time", "abbreviation": "ST", "ordinal": 6, "days": 14 }
    ]
  },
  "days": {
    "values": [
	  
	  { "name": "Freezeday", "abbreviation": "Frz", "ordinal": 1 },
	  { "name": "Waterday", "abbreviation": "Wtr", "ordinal": 2 },
	  { "name": "Clayday", "abbreviation": "Cly", "ordinal": 3 },
	  { "name": "Windsday", "abbreviation": "Wnd", "ordinal": 4 },
	  { "name": "Fireday", "abbreviation": "Fir", "ordinal": 5 },
	  { "name": "Wildday", "abbreviation": "Wld", "ordinal": 6 },
	  { "name": "Godday", "abbreviation": "God", "ordinal": 7 }

    ],
    "daysPerYear": 294,
    "hoursPerDay": 24,
    "minutesPerHour": 60,
    "secondsPerMinute": 60
  },
  "moons": {
    "values": [
      {
        "name": "Moon",
        "cycleLength": 7,
        "offset": 0,
        "color": "DE2A2A",
        "firstNewMoon": {
          "year": 1,
          "month": 1,
          "day": 1
        },
        "phases": [
          {
            "name": "Crescent Go",
            "display": "Waning Crescent",
            "length": 1,
            "icon": "fa-moon"
          },
		  {
            "name": "Dying",
            "display": "New Moon",
            "length": 1,
            "icon": "fa-moon"
          },
		  {
            "name": "Black",
            "display": "New Moon",
            "length": 1,
            "icon": "fa-moon"
          },
		  {
            "name": "Crescent Come",
            "display": "Waxing Crescent",
            "length": 1,
            "icon": "fa-moon"
          },
		  {
            "name": "Empty Half",
            "display": "Waxing Gibbous",
            "length": 1,
            "icon": "fa-moon"
          },
		  {
            "name": "Full",
            "display": "Full Moon",
            "length": 1,
            "icon": "fa-moon"
          },
		  {
            "name": "Full Half",
            "display": "Waning Gibbous",
            "length": 1,
            "icon": "fa-moon"
          }
        ]
      }
    ]
  },
  "sun": {
    "values": [
      {
        "dawn": 6,
        "dusk": 18,
        "monthStart": 1,
        "monthEnd": 6
      }
    ]
  },
  "seasons": {
    "values": [
      {
        "name": "Sea Season",
        "monthStart": 1,
        "monthEnd": 1
      },
	  {
        "name": "Fire Season",
        "monthStart": 2,
        "monthEnd": 2
      },
	  {
        "name": "Earth Season",
        "monthStart": 3,
        "monthEnd": 3
      },
	  {
        "name": "Dark Season",
        "monthStart": 4,
        "monthEnd": 4
      },
	  {
        "name": "Storm Season",
        "monthStart": 5,
        "monthEnd": 5
      },
	  {
        "name": "Sacred Time",
        "monthStart": 6,
        "monthEnd": 6
      }
    ]
  },
  "weather": {
    "values": [
      {
        "name": "Spring,",
        "monthStart": 1,
        "monthEnd": 1,
        "tempOffset": 5
      },
	  {
        "name": "Summer",
        "monthStart": 2,
        "monthEnd": 2,
        "tempOffset": 15
      },
	  {
        "name": "Autumn",
        "monthStart": 3,
        "monthEnd": 3,
        "tempOffset": 5
      },
	  {
        "name": "Winter,",
        "monthStart": 4,
        "monthEnd": 4,
        "tempOffset": -20
      },
	  {
        "name": "Winter",
        "monthStart": 5,
        "monthEnd": 5,
        "tempOffset": -10
      },
	  {
        "name": "Spring",
        "monthStart": 6,
        "monthEnd": 6,
        "tempOffset": -5
      }
    ]
  }
}