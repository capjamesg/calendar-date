class CalendarDate extends HTMLElement {
    constructor () {
        super();

        this._shadowRoot = this.attachShadow({mode: 'open'});
        this._shadowRoot.innerHTML = `
            <div class="date-container">
                <div class="date-month"></div>
                <div class="date-day"></div>
            </div>
        `;

        this._shadowRoot.querySelector('.date-day').innerHTML = this.getAttribute('day');
        this._shadowRoot.querySelector('.date-month').innerHTML = this.getAttribute('month');
    }
}

customElements.define('calendar-date', CalendarDate);