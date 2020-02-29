
function Message() {
  var msg="Message sur la ligne 1.nMessage sur la ligne 2.n...";
  console.log(msg)
  alert(msg);
}
function(event) {
  if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {
    return false;
  }

  var $parent = $(this.parentNode);
  var isActive = $parent.hasClass(ClassName.OPEN);
  var isCollapsed = NavDropdown._isCollapsed($(this).closest(Selector.BASE));

  NavDropdown._clearMenus(
    $.Event('click', {
      target: this,
      data: {
        toggles: isCollapsed ? [this] : null
      }
    })
  );

  if (isActive) {
    return false;
  }

  if ('ontouchstart' in document.documentElement && !$parent.closest(Selector.DROPDOWN + '.' + ClassName.OPEN).length) {

    // if mobile we use a backdrop because click events don't delegate
    var dropdown = document.createElement('div');
    dropdown.className = ClassName.BACKDROP;
    $(dropdown).insertBefore($(this).closest(Selector.BASE));
    $(dropdown).on('click', NavDropdown._clearMenus);

  }

  var relatedTarget = {
    relatedTarget: this
  };
  var showEvent = $.Event(Event.SHOW, relatedTarget);

  $parent.trigger(showEvent);

  if (showEvent.isDefaultPrevented()) {
    return false;
  }

  this.focus();
  this.setAttribute('aria-expanded', 'true');

  $parent.toggleClass(ClassName.OPEN);
  $parent.trigger($.Event(Event.SHOWN, relatedTarget));

  return false;
}