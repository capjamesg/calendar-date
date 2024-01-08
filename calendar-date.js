class CalendarDate extends HTMLElement {
    constructor () {
        super();

        this._shadowRoot = this.attachShadow({mode: 'open'});
        this._shadowRoot.innerHTML = `
        	<style>
			.date-container {
				--color: red;
				--background: white;
				--dayColor: black;
				box-sizing:border-box;
				font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
				display: inline-block;
				max-width: 100%;
				min-width: 75px;
				text-align: center;
			}
			.date-container * {
				box-sizing:border-box;
			}
			.date-month {
				padding: 5px;
				color: var(--background);
				background-color: var(--color);
				border-width: 0;
				border-radius: 5px 5px 0 0;
				border-color: var(--color);
				border-style: solid;
			}
			.date-day {
				font-size: 2rem;
				font-weight: bold;
				color: var(--dayColor);
				padding: 5px;
				background-color: var(--background);
				border-radius: 0 0 5px 5px;
				border-color: var(--color);
				border-style: solid;
				border-width: 0 1px 1px 1px;
			}
			</style>
            <div class="date-container">
                <div class="date-month"></div>
                <div class="date-day"></div>
            </div>
        `;
        let day = this.getAttribute("day") ||
            new Date().getDate();
        let month = this.getAttribute("month") ||
            new Date().toLocaleString("default", {month: "long"});

        this._shadowRoot.querySelector(".date-day").innerHTML = day;
        this._shadowRoot.querySelector(".date-month").innerHTML = month;
    }
}

customElements.define('calendar-date', CalendarDate);