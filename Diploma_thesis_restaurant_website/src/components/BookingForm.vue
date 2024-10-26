<script setup>
import { ref } from 'vue';
import { useBookingStore } from '@/stores/booking'; // Pinia Store для бронирования

// Инициализация данных формы
const firstName = ref('');
const lastName = ref('');
const email = ref('');
const phone = ref('');
const date = ref('');
const time = ref('');
const guests = ref(null);
const successMessage = ref('');

// Доступные временные слоты
const availableTimes = ['12:00', '14:00', '16:00', '18:00', '20:00'];

// Инициализация Pinia хранилища
const bookingStore = useBookingStore();

// Функция отправки данных формы
const submitForm = async () => {
  try {
    // Отправляем данные на сервер через Pinia Store
    await bookingStore.bookTable({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      phone: phone.value,
      date: date.value,
      time: time.value,
      guests: guests.value,
    });
    successMessage.value = 'Бронирование успешно выполнено!';
  } catch (error) {
    console.error('Ошибка при бронировании:', error);
    successMessage.value = 'Произошла ошибка при бронировании. Попробуйте снова.';
  }
};
</script>
<template>
  <section class="booking-form" id="booking-form">
    <div>
      <div class="flex flex-col items-center pb-44">
        <div class="flex flex-col mt-56">
          <h2>Забронировать столик</h2>
          <p class="body-text text-[#4d4d4d]">Свяжитесь с рестораном</p>
        </div>
        <form class="booking-form__form grid grid-cols-2 gap-12 mt-28" id="booking-form__form" @submit.prevent="submitForm">
          <!-- Имя -->
          <div class="body-text">
            <input v-model="firstName" type="text" id="firstName" placeholder="Имя" required />
          </div>

          <!-- Фамилия -->
          <div class="body-text">
            <input v-model="lastName" type="text" id="lastName" placeholder="Фамилия" required />
          </div>

          <!-- Электронная почта -->
          <div class="body-text col-span-2">
            <input v-model="email" type="email" autocomplete="email" placeholder="Электронная почта" id="email" />
          </div>

          <!-- Телефон -->
          <div class="body-text col-span-2">
            <input v-model="phone" type="tel" id="phone" autocomplete="tel" placeholder="Телефон" required />
          </div>

          <!-- Дата -->
          <div class="body-text">
            <input v-model="date" type="date" id="date" required />
          </div>

          <!-- Время -->
          <div class="body-text">
            <select v-model="time" id="time" required>
              <option disabled value="">Выберите время</option>
              <option v-for="t in availableTimes" :key="t" :value="t">{{ t }}</option>
            </select>
          </div>

          <!-- Количество человек -->
          <div class="body-text col-span-2">
            <label for="guests">Количество человек *</label>
            <select v-model="guests" id="guests" required>
              <option disabled value="">Выберите количество человек</option>
              <option v-for="n in 8" :key="n" :value="n">{{ n }}</option>
            </select>
          </div>          
        </form>
        <!-- Кнопка бронирования -->
        <button class="booking-form__form__submit heading-five mt-20" type="submit" form="booking-form__form">Забронировать сейчас</button>
        <!-- Сообщение об успешном бронировании -->
        <p v-if="successMessage">{{ successMessage }}</p>
      </div>  
    </div>    
  </section>
</template>
<style scoped lang="scss">
input, select, button {
  display: block;
  width: 100%;
  background-color: #ffffff00;
}
.booking-form {
  background-image: url('@/assets/bookingForm/background-booking-form.svg');
  background-size: cover;
  &__form {
    min-width: 1680px;
    input, select {
      padding: 30px 40px 30px 40px;
      border: 2px solid rgb(0, 0, 0);
      &::placeholder {
        color: rgb(0, 0, 0);
      }
      &:focus::placeholder {
        color: #9ca3af;
      }      
    }
    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      -ms-appearance: none;
      appearance: none;
      background: url("@/assets/icons/Icon_angle-down.svg") no-repeat right;
      background-position-x: calc(100% - 40px);
    }
    &__submit {
      width: 344px;
      padding: 20px 14px 20px 14px;
      /* 5E6600 */
      background: #5E6600;
      /* 000000 */
      border: 2px solid #000000;
      &:hover {
        color:#000000;
        border-color:#000000;
        box-shadow: 8px 10px 5px 2px rgba(35, 48, 0, 0.4);
      }
    }    
  }
}
</style>