const data = JSON.stringify([
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]);

const info = JSON.parse(data); 
const itemTitles = document.querySelectorAll(".report-item-text-category p");
const buttons = document.querySelectorAll(".user-bottom p")
const reportItems = document.querySelectorAll(".report-item");
const currentHours = document.querySelectorAll(".report-item-text-hours h1");
const previousHours = document.querySelectorAll(".report-item-text-hours p");
const colors = [
    "hsl(15, 100%, 70%)",
    "hsl(195, 74%, 62%)",
    "hsl(348, 100%, 68%)",
    "hsl(145, 58%, 55%)",
    "hsl(264, 64%, 52%)",
    "hsl(43, 84%, 65%)"
]

info.forEach(obj => {
    let index = info.indexOf(obj);
    itemTitles[index].innerHTML = obj.title;
    reportItems[index].style.backgroundImage = `url("images/icon-${obj.title.split(" ").join("-").toLowerCase()}.svg")`
    reportItems[index].style.backgroundColor = colors[index];
    currentHours[index].innerHTML = `${obj.timeframes.daily.current}hrs`;
    previousHours[index].innerHTML = `Yesterday - ${obj.timeframes.daily.previous}hrs`
    buttons[0].style.color = "white";

});

buttons.forEach(btn => {
    btn.addEventListener("click", function(){
        const id = btn.innerHTML;

        //deselect other selections before highlighting the one clicked
        buttons.forEach(btn => {
            btn.style.color = "hsl(235, 45%, 61%)";
        });

        // highlighting selected option
        btn.style.color = "white"

        // populate report items based on option clicked
        info.forEach(obj => {
            let index = info.indexOf(obj);
            if(id === "Daily") {
                currentHours[index].innerHTML = `${obj.timeframes.daily.current}hrs`;
                previousHours[index].innerHTML = `Yesterday - ${obj.timeframes.daily.previous}hrs`
            };
            if(id === "Weekly") {
                currentHours[index].innerHTML = `${obj.timeframes.weekly.current}hrs`
                previousHours[index].innerHTML = `Last week - ${obj.timeframes.weekly.previous}hrs`
            };
            if(id === "Monthly") {
                currentHours[index].innerHTML = `${obj.timeframes.monthly.current}hrs`
                previousHours[index].innerHTML = `Last month - ${obj.timeframes.monthly.previous}hrs`
            };       
        });
    });
});



