$(function(){
  var html = $('#tpl').html();

  var articles = [
    {title : 'Бегас Анна Вячеславовна',
     study : 'КНЕУ, Специальность: "финансы"',
     likes_1 : 'Мне это нравится',
     likes_2 : 'Считаю, что счастлив тот, кто зарабатывает своим хобби',
     likes_3 : 'Не представляю себя без постоянного потока новых знаний',
     phone : '+38 063 237 0264',
     fb : '<a href="https://www.facebook.com/profile.php?id=100001837846439">facebook</a>',
     feedback : 'Напишу через 125 дней ;)'
      },
  // {title : 'Article 2',
  // content : 'ipsum dolor seni renuter...'
  //     }
  ];

  var content = tmpl(html, {
    data : articles
  });

  $("body").append(content);

});
