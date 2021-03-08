import React from "react";
import Select from "react-select";
class MySelect extends React.Component {
    handleChange = value => {
      // this is going to call setFieldValue and manually update values.topcis
      this.props.onChange(this.props.name, value);
    };
  
    handleBlur = () => {
      // this is going to call setFieldTouched and manually update touched.topcis
      this.props.onBlur(this.props.name, true);
    };
  
    render() {
      return (
        <div>
          <Select
            id="color"
            options={this.props.options}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            value={this.props.value}
          />
          {!!this.props.error &&
            this.props.touched && (
              <div style={{ color: 'red' }}>{this.props.error}</div>
            )}
        </div>
      );
    }
  }
  
  export default MySelect;