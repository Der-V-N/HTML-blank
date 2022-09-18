
// Маскирование
var tel = document.querySelector("input[type='tel']")
var im = new Inputmask("+7(999)999-99-99");
im.mask(tel);

// Валидатор
const validation = new JustValidate('#feedback__form',
  {
    errorLabelCssClass: 'just-validate-error-label',
    errorLabelStyle: {
      color: '#D31B38',
      fontSize: '16px'
    },
  },
);
validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Имя слишком короткое',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Имя слишком длинное',
    },
    {
      rule: 'required',
      errorMessage: 'Введите имя!',
    },
  ])
  .addField('#tel', [
    {
      rule: 'required',
      errorMessage: 'Укажите ваш телефон',
    },
    {
      rule: 'function',
      //преобразование цыфт из маски в числовой INPUTMASK
      validator: function () {
        const phone = tel.inputmask.unmaskedvalue()
        console.log(phone)
        return phone.length === 10
      },
      errorMessage: 'Введите корректный телефон',
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Укажите ваш e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Введите корректный Email',
    },
  ]).onSuccess((event) => {
    console.log('Validation passes and form submitted', event);

    let formData = new FormData(event.target);

    console.log(...formData);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    event.target.reset();
  });
