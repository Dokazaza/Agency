"use client"

import React, { useEffect, useRef } from 'react';
import { annotate } from 'rough-notation';

type UnderlineProps = {
    children: string
}

const UnderlineWord = ({ children }: UnderlineProps) => {
    const wordRef = useRef(null);

    useEffect(() => {
        if (wordRef.current) {
            const annotation = annotate(wordRef.current, { type: 'underline', color: 'blue', strokeWidth: 2 });
            annotation.show();
        }
    }, []);

    return (
        <span ref={wordRef} >
      {children}
    </span>
    );
};

export default UnderlineWord;