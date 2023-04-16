import React, { useContext } from 'react';
import { Context } from './../Context'
import { fetchUser } from '../reducers/user/actions'

const GrondChild = () => {
    let { state, dispatch } = useContext(Context)
    const { user: { isLoading, info, error } } = state
    return (
        <div>
            <h4>User组件</h4>
            <p>
                {
                    isLoading
                        ? 'Loading...'
                        : !!info
                            ? info?.name
                            : error?.message
                }
            </p>
            <button onClick={() => dispatch(fetchUser())}>Query Info</button>
        </div>
    );
};

export default GrondChild;