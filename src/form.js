import React from 'react';

export default class MyWidgetForm extends React.Component {
  // this *static* variable contains the initial values for the form:
  static DEFAULT_FORM_CONTENT = {
    setting1: '',
  };

  // if defined, this *static* function will be called with the widget form content to
  // determine if it is valid or not.
  static validate = (content) => {
    const { setting1 } = content;
    if (setting1 === '') {
      // if something is wrong, return an object; keys are offending fields while values are error messages:
      return { setting1: 'This setting must not be empty!' };
    }
    return {}; // all is ok - return empty object
  };

  render() {
    const {
      content: { setting1 = '' },
      onChange,
      onBlur,
      setFieldValue,
      sharedValues,
    } = this.props;

    return (
      <div className="topn-widget-form">
        <div className="field">
          <label>My setting 1:</label>
          <input type="text" name="content.setting1" value={setting1} onChange={onChange} onBlur={onBlur} />
          <p className="hint markdown">Hint: this is an example of a setting that widget might use.</p>
        </div>
      </div>
    );
  }
}
