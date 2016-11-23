import jQuery from '../../../node_modules/jquery/dist/jquery.js'
import Form from '../lib/form.class';
import Header from '../lib/header.class';
let form = new Form(document.querySelector('form'));
let header = new Header(document.querySelector('header'),'/header.data.json');
