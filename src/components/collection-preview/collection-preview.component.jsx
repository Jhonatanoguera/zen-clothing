import React from 'react';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
    <div classname='collection-preview'>
        <h1 classname='title'>{ title.toUpperCase() }</h1>
        <div classname='preview'>
            {
                items
                .filter((item, index) => index < 4)
                .map(item => (
                    <div key={item.id}>{item.name}</div>
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;