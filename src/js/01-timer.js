import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import 'izitoast/dist/css/iziToast.min.css';
import iziToast from 'izitoast';

const startButton = document.querySelector('button[data-start]');
const datetimePicker = document.getElementById('datetime-picker');
const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');

let selectedDate = null;
let timerInterval = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    const now = new Date();
    selectedDate = selectedDates[0];

    // Sprawdzenie, czy wybrano datę w przyszłości
    if (selectedDate <= now) {
      iziToast.error({
        title: 'Błąd',
        message: 'Please choose a date in the future.',
      });
      startButton.disabled = true; // Dezaktywacja przycisku dla daty z przeszłości
    } else {
      startButton.disabled = false; // Aktywacja przycisku dla daty z przyszłości
    }
  },
};

// Inicjalizacja Flatpickr
flatpickr(datetimePicker, options);

// Funkcja aktualizacji odliczania
function updateTimer() {
  const now = new Date().getTime();
  const timeRemaining = selectedDate - now;

  if (timeRemaining >= 0) {
    const { days, hours, minutes, seconds } = convertMs(timeRemaining);

    daysElement.textContent = addLeadingZero(days);
    hoursElement.textContent = addLeadingZero(hours);
    minutesElement.textContent = addLeadingZero(minutes);
    secondsElement.textContent = addLeadingZero(seconds);
  } else {
    clearInterval(timerInterval);
    iziToast.success({
      title: 'Gratulacje',
      message: 'Czas się skończył!',
    });
    startButton.disabled = true;
  }
}

// Funkcja startująca odliczanie
function startTimer() {
  startButton.disabled = true;
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 1000);
}

// Obsługa kliknięcia przycisku Start
startButton.addEventListener('click', () => {
  startButton.disabled = true;
  startTimer();
});

// Dodawanie zer wiodących do wartości poniżej 10
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

// Konwersja milisekund na dni, godziny, minuty i sekundy
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
