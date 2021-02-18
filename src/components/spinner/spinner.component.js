import React from 'react'
import {SpinnerContainer, SpinnerOverlay} from './spinner.style'

const Spinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) : (
            <WrappedComponent {...otherProps} />
        )
}

export default Spinner


