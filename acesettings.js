var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode({
    path: "ace/mode/php",
    inline: true
});
editor.$blockScrolling = Infinity;
var settings_active_callback = "is_front_page";
var settings_capability = "edit_theme_options";
editor.getSession().selection.clearSelection();
editor.getSession().setUseWrapMode(true);
