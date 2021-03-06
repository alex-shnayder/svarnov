'use strict';

module.exports = {
  id: 'kedr-mig-160',
  link: 'кедр-mig-160',
  isHot: true,
  shortName: 'КЕДР MIG-160',
  description: 'Сварочный полуавтомат КЕДР MIG-160, +ММА, 220В установка со средними параметрами, идеально подойдет для использования как в быту так и на малом производстве или частном предприятии. Работает от сети 220 В, что значительно упрощает эксплуатацию. Есть возможность устанавливать кассету проволоки на 5 кг. Проста в управлении и не требует специального обслуживания. ',
  specs: [{
    caption: 'Управление',
    value: 'плавное'
  }, {
    caption: 'Вес',
    value: '12,5 кг'
  }, {
    caption: 'Диаметр электродов',
    value: '1,6-4,0 мм'
  }, {
    caption: 'Диаметр проволоки',
    value: '0,8-1,0 мм'
  }, {
    caption: 'Диапазон сварочного тока',
    value: '50-160 А'
  }, {
    caption: 'Максимальный сварочный ток',
    value: '160 А'
  }, {
    caption: 'Напряжение сети',
    value: '220 В'
  }, {
    caption: 'Мощность',
    value: '7,1 кВт'
  }, {
    caption: 'Габариты',
    value: '485x185x370 мм'
  }, {
    caption: 'Режим работы',
    value: '60 ПВ%'
  }],
  images: [
    require('rename?[path]kedr-mig-160-[name]_160x120.[ext]!magick?-resize 160x120!./main.jpg').replace(/\\/g, '/')
  ]
};
