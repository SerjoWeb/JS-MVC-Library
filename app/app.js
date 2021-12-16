import ViewTest from './views/view-test';

const $root = document.getElementById('root');

const $title = 'User list';

const $app  = `
    <div>
        <h1>App Works!</h1>
        <p>Start to make a web apps easier!</p>
    </div>
  
    <div>
        <h2>${$title}</h2>

        <div class='user-list'>
            ${ViewTest.render()}
        </div>
    </div>
`;

$root.innerHTML = $app;
