/*
 * jQuery BootsMenu Plugin (for Bootstrap nested menu)
 *
 * @author sj
 * @link https://github.com/samejack/BootsMenu
 * @copyright Copyright 2015 SJ
 * @version 1.0.0
 * @license Apache License Version 2.0 (https://github.com/samejack/BootsMenu/blob/master/LICENSE)
 */
jQuery.fn.bootsMenu = function (configs) {

  if (typeof(configs) !== 'object') {
    configs = {};
  }

  $.extend(configs, {
    delayTime: 500,
    autoFix: true
  });

  return this.each(function () {
    var menu = $(this);
    menu.addClass('bm-ul');

    if (configs.autoFix) {
      menu.find('li.dropdown').each(function () {
        var liElement = $(this);
        if (liElement.find('ul').size() > 0) {
          liElement.addClass('dropdown-toggle');
          liElement.children('a').append('<span class="caret"></span>');
        }
      });

      menu.find('ul').each(function () {
        $(this).addClass('dropdown-menu');
      });

    }


    menu.find('li.dropdown > ul.dropdown-menu li').each(function () {
      var liElement = $(this);

      // sub menu
      if (liElement.find('ul').size() > 0) {
        // add icon
        if (configs.autoFix) {
          liElement.append('<i class="glyphicon glyphicon-triangle-right"></i>');
        }

        liElement.on('mouseenter', function () {
          liElement.addClass('bm-hover');
          setTimeout(function () {
            if (liElement.hasClass('bm-hover')) {
              liElement.find('ul:first').css('left', liElement.width());
              liElement.addClass('bm-active');
            }
          }, configs.delayTime);
        });

        liElement.on('mouseleave', function () {
          liElement.removeClass('bm-hover');
          setTimeout(function () {
            if (liElement.find('ul li.bm-hover').size() === 0) {
              liElement.removeClass('bm-active');
            }
          }, configs.delayTime);
        });
      }
    });

//      $('li.dropdown > ul.dropdown-menu li').each(function () {
//        var liElement = $(this), liIcon;
//
//        // sub menu
//        if (liElement.find('ul').size() > 0) {
//          // add icon
//          liIcon = $('<i class="glyphicon glyphicon-triangle-right"></i>');
//          liElement.append(liIcon);
//
//          liElement.on('mouseenter', function () {
//            liElement.addClass('bm-hover');
//            setTimeout(function() {
//              if (liElement.hasClass('bm-hover')) {
//                console.log(liElement.width());
//                liElement.find('ul:first').css('left', liElement.width());
//                liElement.addClass('bm-active');
//              }
//            }, 500);
//          });
//
//          liElement.on('mouseleave', function () {
//            liElement.removeClass('bm-hover');
//            // 等待一段時間才決定要不要 unactive
//            setTimeout(function() {
//              if (liElement.find('ul li.bm-hover').size() === 0) {
//                liElement.removeClass('bm-active');
//              }
//            }, 500);
//          });
//        }
//      });
  });
};
