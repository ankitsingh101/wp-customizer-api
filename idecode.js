$(document).ready(function() {
    function chech_panel() {
        $('#add_panel').prop("checked", true).trigger("change");
    }
    $('#panel-list').hide();
    var text_domain = "textdomain";
    var panel_id = "panel-id";
    var panel_priority = 10;
    var panel_capability = "edit_theme_options";
    var panel_title = "panel title";
    var panel_description = "panel description";
    $('input#text_domain').on('change', function() {
        text_domain = $('input#text_domain').val();
        chech_panel();
    });
    $("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
        $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
    });
    $('#panel-list input[type=text],#panel-list input[type=range]').change(function() {
        panel_id = $('#panel_id').val() || "panel-id";
        panel_priority = $('#panel_priority').val() || 10;
        panel_capability = "edit_theme_options";
        panel_title = $('input#panel_title').val() || "panel title";
        panel_description = $('#panel_description').val() || "panel description";
        add_panel = "\t$wp_customize->add_panel( \n\t\t'" + panel_id + "',\n \t\tarray(\n\
\t\t\t'priority' => " + panel_priority + ",\n\
\t\t\t'capability' => '" + panel_capability + "',\n\
\t\t\t'theme_supports' => '',\n\
\t\t\t'title' => __( '" + panel_title + "', '" + text_domain + "' ),\n\
\t\t\t'description' => __( '" + panel_description + "', '" + text_domain + "' ),\n\
\t\t)\n\
\t);\n\
";
        section_add_panel = ",\n\t\t\t'panel' => '" + panel_id + "'";
        chech_panel();
    });
    var add_panel = "";
    var section_add_panel = "";
    $('#add_panel').on('change', function() {
        if ($('#add_panel:checkbox:checked').length > 0) {
            $('#panel-list').show();
            add_panel = "\t$wp_customize->add_panel( \n\t\t'" + panel_id + "',\n \t\tarray(\n\
\t\t\t'priority' => " + panel_priority + ",\n\
\t\t\t'capability' => '" + panel_capability + "',\n\
\t\t\t'theme_supports' => '',\n\
\t\t\t'title' => __( '" + panel_title + "', '" + text_domain + "' ),\n\
\t\t\t'description' => __( '" + panel_description + "', '" + text_domain + "' ),\n\
\t\t)\n\
\t);\n\
";
            section_add_panel = ",\n\t\t\t'panel' => '" + panel_id + "'";
        } else {
            add_panel = "";
            section_add_panel = "";
            $('#panel-list').hide();
        }
    });
    $('button#add_customizer').click(function(e) {
        var function_name = $('#function_name').val() || "register_customizer";
        var sections_id = $('#section_id').val() || "section_id";
        var sections_title = $('#section_title').val() || "Section Title";
        var sections_priority = $('#section_priority').val() || "10";
        var sections_description = $('#section_description').val() || "This is a section Desctiption.";
        var sections_args = "\n\t\tarray(\n\t\t\t'title' => __('" + sections_title + "','" + text_domain + "'), \n\t\t\t'priority' => " + sections_priority + ",\n\t\t\t'capability' => 'edit_theme_options',\n\t\t\t'description' => __('" + sections_description + "','" + text_domain + "'), \n\t\t\t'active_callback ' => '" + settings_active_callback + "'" + section_add_panel + "\n\t\t)";
        var settings_id = $('#settings_id').val() || "setting_id";
        var settings_transport = $('#settings_transport').val() || "refresh";
        var settings_default = $('#settings_default').val() || "";
        var control_type = $('#control-type').val() || "text";
        var userType = (control_type == "radio" || control_type == "select") ? "'choices'=> array(\n\t\t\t\t\t'dark'=> __( 'Dark' ),\n\t\t\t\t\t'light'  => __( 'Light' )\n\t\t\t)" : "";
        var settings_code = "function " + function_name + "($wp_customize){\n\
\t//1. Define a new section (if desired) to the Theme Customizer\n\
" + add_panel + "\
\t$wp_customize->add_section(\n\t\t'" + sections_id + "'," + sections_args + "\n\t);\n\
\t$wp_customize->add_setting(\n\
\t\t'" + settings_id + "',\n\
\t\tarray(\n\
\t\t\t'type' => 'theme_mod',\n\
\t\t\t'capability' => 'edit_theme_options',\n\
\t\t\t'transport' => '" + settings_transport + "',\n\
\t\t\t'sanitize_callback' => '',\n\
\t\t\t'default' => '" + settings_default + "',\n\
\t\t)\n\
\t);\n\
\t$wp_customize->add_control(\n\
\t\t'" + settings_id + "',\n\
\t\tarray(\n\
\t\t\t'label' => 'Copyright text',\n\
\t\t\t'section' => '" + sections_id + "',\n\
\t\t\t'type' => '" + control_type + "',\n\
\t\t\t" + userType + "\n\
\t\t)\n\
\t);\n\
}\n\
add_action( 'customize_register', '" + function_name + "' );";
        editor.setValue(settings_code);
    });
});

function updateTextInput(val) {
    document.getElementById('textInput').value = val;
}

function updatepriorityTextInput(val) {
    document.getElementById('prioritytextInput').value = val;
}
