import React from "react";

export const FirstStep = () => {

    return (
      <form className='form'>

          <div className='form__checkboxes'>
              <label className='form__checkbox-container'>
                  ubrania, które nadają się do ponownego użycia
                  <input type='radio'
                         className='form__checkbox-box'
                         name={'donatedThings'}
                         value={'ubrania, które nadają się do ponownego użycia'}/>
                  <span className='form__checkbox-checkmark'/>
              </label>

              <label className='form__checkbox-container'>
                  ubrania do wyrzucenia
                  <input type='radio'
                         className='form__checkbox-box'
                         name={'donatedThings'}
                         value={'ubrania, do wyrzucenia'}/>
                  <span className='form__checkbox-checkmark'/>
              </label>

              <label className='form__checkbox-container'>
                  zabawki
                  <input type='radio'
                         className='form__checkbox-box'
                         name={'donatedThings'}
                         value={'zabawki'}/>
                  <span className='form__checkbox-checkmark'/>
              </label>

              <label className='form__checkbox-container'>
                  książki
                  <input type='radio'
                         className='form__checkbox-box'
                         name={'donatedThings'}
                         value={'książki'}/>
                  <span className='form__checkbox-checkmark'/>
              </label>

              <label className='form__checkbox-container'>
                  inne
                  <input type='radio'
                         className='form__checkbox-box'
                         name={'donatedThings'}
                         value={'inne'}/>
                  <span className='form__checkbox-checkmark'/>
              </label>
          </div>

      </form>
    );
}
