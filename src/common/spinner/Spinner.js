import React, { Component } from 'react'
import { css } from '@emotion/core';
import HashLoader from 'react-spinners/HashLoader';
import './Spinner.css';

const override = css`
    display: block;
    margin: 170px auto;
    border-color: red;
`;

const HashLoaderSpinner = (value) => {
    return (
        <div className="spinner">
            <div className="sweet-loading">
                <HashLoader
                    css={override}
                    sizeUnit={"px"}
                    size={350}
                    color={'#123abc'}
                    loading={value}
                />
            </div>
        </div>
    );
}

export { HashLoaderSpinner }