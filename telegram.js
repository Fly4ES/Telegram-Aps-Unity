window.GetTelegramTheme = function () {
    const theme = window.Telegram.WebApp.themeParams;
    const themeData = {
        bgColor: theme.bg_color || "#FFFFFF",
        textColor: theme.text_color || "#000000",
        hintColor: theme.hint_color || "#808080"
    };

    // Передаём данные в Unity
    if (unityInstance) {
        unityInstance.SendMessage('ThemeManager', 'OnThemeReceived', JSON.stringify(themeData));
    }
};