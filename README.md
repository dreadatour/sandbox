В /src/module исходные файлы. В /src/wrapped_module эти же файлы, адаптированные для браузера.
Важный момент - номера строк не ломаются.


В /src/common.js примитивная реализация CommonJS.


В ./config.json конфиг модулей. Ключ - название модуля, значение - путь к файлу.


В index.html подключен список js-файлов. Для получения правильного списка,
веб-сервер должен "на лету" находить в js-файлах вызовы require('<module_name>') и строить дерево зависимостей.
