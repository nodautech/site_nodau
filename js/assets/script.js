//Português
$(function() {
    $(".br").click(function() {
        //cabeçalho
        $(".nav-menu").children().eq(0).text("Início");
        $(".nav-menu").children().eq(1).text("Portfólio");
        $(".nav-menu").children().eq(2).text("Serviços");
        $(".nav-menu").children().eq(3).text("Contato");
        $(".language-selected").text("pt-BR");
        $(".language-selected").removeClass("change-en");
        $(".language-selected").removeClass("change-es");
        $(".language-selected").addClass("change-br");
        //seção
        $("#caption").text("Contruindo o futuro da experiência digital");
        $("#text").text("Somos uma Agência Digital completa centrada no ser humano, construímos um conjunto de estratégias de lançamento e soluções personalizadas para cada negócio.");
    });
});

//English
$(function() {
    $(".en").click(function() {
        //header
        $(".nav-menu").children().eq(0).text("Home");
        $(".nav-menu").children().eq(1).text("Portfolio");
        $(".nav-menu").children().eq(2).text("Services");
        $(".nav-menu").children().eq(3).text("Contact");
        $(".language-selected").text("en-US");
        $(".language-selected").removeClass("change-es");
        $(".language-selected").removeClass("change-br");
        $(".language-selected").addClass("change-en");
        //section
        $("#caption").text("Building the future of the digital experience");
        $("#text").text("We are a complete human-centered Digital Agency, we build a set of launch strategies and customized solutions for each business.");
    });
});