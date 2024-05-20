import React from "react";
import { Fragment } from "react";
// catch-all route 
// app routs which have /docs will lead to this page
// /docs/1 or /docs/example or anything else will lead to this page

interface ProductDetailsProps {
    params: { slug: string[] };
};

export default function Docs({params} : ProductDetailsProps
) {
    if (params.slug?.length === 2) {
        return <h1>
        viewing Docs for feature {params.slug[0]} & concept {params.slug[1]}</h1>
    }else if(params.slug?.length === 1){
        return <h1>
            viewing Docs for feature {params.slug[0]}
        </h1>
    }
    return (
        <Fragment>
            <h1>Docs Page</h1>
        </Fragment>
    )
}
