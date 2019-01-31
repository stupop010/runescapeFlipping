import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import searchField from './searchField';
import formField from './formField'
import '../css/itemList.css';

class EditItem extends Component {
    renderField(){
        return _.map(formField, ({ label, name}) => {
            return <Field key={name} label={label} name={name} component={searchField} type='text'/>
        })
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues)
    }
    
    render(){
        return (
            <form className="mt-5" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <div className="form-group">
                    {this.renderField()}
                    <button className="btn btn-dark mr-2">Cancel</button>
                    <button className="btn btn-success">Sumbit</button>
                </div>
            </form>
        )
    }
}


const formWrapped = reduxForm({form: 'itemEdit'})(EditItem)

export default connect(null)(formWrapped)

