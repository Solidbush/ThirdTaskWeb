const RadioItemsKeys = {
    comp: 'comp',
    intr: 'intr',
    alls: 'alls',
}

const RADIO_ITEMS_TO_TEXT = {
    [RadioItemsKeys.comp]: 'Компилируемые',
    [RadioItemsKeys.intr]: 'Интерпретируемые',
    [RadioItemsKeys.alls]: 'Смешанные'
}

const submitFormButton = React.createElement('p', null, React.createElement('input', {type: 'submit'}));

class ComponentRadio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {value: ''};
        this.items = props.items;
    }

    handleChange = ({ target }) => {
        this.setState({ value: target.value });
    }

    handleSubmit = (event) => {
        alert(`Выбранное значение: ${ RADIO_ITEMS_TO_TEXT[this.state.value] ?? '' }`);
        event.preventDefault();
    }

    render() {
        const listItems = this.items.map(({id, value, name, text}) => {
                    const itemInput = React.createElement('input', {type: 'radio', name, value, onChange: this.handleChange});
                    return React.createElement('p', {key: id}, itemInput, text);
                })
            
            
        return React.createElement('form', {onSubmit: this.handleSubmit}, listItems, submitFormButton);
    }

}

const RadioListItems = [
    {
        id: 1,
        name: 'subject',
        value: RadioItemsKeys.comp,
        text: RADIO_ITEMS_TO_TEXT[RadioItemsKeys.comp],
    },
    {
        id: 2,
        name: 'subject',
        value: RadioItemsKeys.intr,
        text: RADIO_ITEMS_TO_TEXT[RadioItemsKeys.intr],
    },
    {
        id: 3,
        name: 'subject',
        value: RadioItemsKeys.alls,
        text: RADIO_ITEMS_TO_TEXT[RadioItemsKeys.alls],
    }
]

ReactDOM.render(React.createElement(ComponentRadio, {items: RadioListItems}), document.getElementById('form1'));



const CheckBoxItemsKeys = {
    cj: 'CJ',
    de: 'De',
    py: 'Py',
}

const CHECK_BOX_ITEMS_TO_TEXT = {
    [CheckBoxItemsKeys.cj]: 'C++ и Java',
    [CheckBoxItemsKeys.de]: 'Delphi',
    [CheckBoxItemsKeys.py]: 'Python'
}

class ComponentCheckBox extends React.Component {
    constructor(props){
        super(props);

        this.state = {value: []};
        this.items = props.items;
    }

    handleChange = ({ target }) => {
        if (!!this.state.value.find(item => item === target.value)) {
            this.setState({value: this.state.value.filter(item => item !== target.value)})
        } else {
            this.setState({value: [...this.state.value, target.value]})
        }
    }

    handleSubmit = (event) => {
        alert(`Выбранное значение: ${ this.state.value.map(item => CHECK_BOX_ITEMS_TO_TEXT[item]).join(', ') }`);
        event.preventDefault();
    }

    render() {
        const listItems = this.items.map(({id, value, name, text}) => {
                    const itemInput = React.createElement('input', {type: 'checkbox', name, value, onChange: this.handleChange});
                    return React.createElement('p', {key: id}, itemInput, text);
                })
            
            
        return React.createElement('form', {onSubmit: this.handleSubmit}, listItems, submitFormButton);
    }
}


const CheckBoxListItems = [
    {
        id: 4,
        name: 'subject',
        value: CheckBoxItemsKeys.cj,
        text: CHECK_BOX_ITEMS_TO_TEXT[CheckBoxItemsKeys.cj],
    },
    {
        id: 5,
        name: 'subject',
        value: CheckBoxItemsKeys.de,
        text: CHECK_BOX_ITEMS_TO_TEXT[CheckBoxItemsKeys.de],
    },
    {
        id: 6,
        name: 'subject',
        value: CheckBoxItemsKeys.py,
        text: CHECK_BOX_ITEMS_TO_TEXT[CheckBoxItemsKeys.py],
    }
]

ReactDOM.render(React.createElement(ComponentCheckBox, {items: CheckBoxListItems}), document.getElementById('form2'));

class ManageReference extends React.Component {
    constructor(props){
        super(props)

        this.state = { name: '', email: '', phone: ''};
        this.items = props.items;
    }

    handleSubmit = (event) => {
        alert(`Вы ввели: ${[this.state.name, this.state.email, this.state.phone].filter(Boolean).join(', ')}`);
        event.preventDefault();
    }

    handleChange = ({target}) => {
        switch(target.type){
            case 'text': 
                this.setState(prev => ({...prev, name: target.value}));
                break;
            case 'email':
                this.setState(prev => ({...prev, email: target.value}));
                break;
            case 'tel':
                this.setState(prev => ({...prev, phone: target.value}));
                break;
            default:
                break;
        }
    }

    render() {
        const listItems = this.items.map(({ id, placeholder, type, size, label }) => {
            const itemInput = React.createElement('input', {id, type, placeholder, size, onChange: this.handleChange});
            const inputLabel = React.createElement('label', { for: id }, label);
            return React.createElement('p', {key: id}, inputLabel, itemInput);
        })

        return React.createElement('form', {onSubmit: this.handleSubmit}, listItems, submitFormButton);
    }

}

const FormListItems = [
    {
        id: 'name',
        placeholder: 'Иван Иванов',
        type: 'text',
        size: 10,
        label: 'Имя и Фамилия: ',
    },
    {
        id: 'email',
        placeholder: 'solidbush@mail.ru',
        type: 'email',
        label: 'Email: ',
    },
    {
        id: 'phone',
        placeholder: '+7(XXX)-XXX-XX-XX',
        type: 'tel',
        label: 'Телефон: ',
    }
]

ReactDOM.render(React.createElement(ManageReference, {items: FormListItems}), document.getElementById('form3'))