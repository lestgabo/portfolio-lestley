import React from 'react';
import { Typography, Box } from '@material-ui/core';
import Img from 'gatsby-image';
import { Link as GatsbyLink } from 'gatsby';

import ItemTags from '@tacogator/gatsby-theme-blog-material-clarisse/src/components/item-tags';
import Link from '@tacogator/gatsby-theme-blog-material-clarisse/src/components/Link';

export default function ({ title, date, timeToRead, excerpt, slug, tags, banner, summary }) {
    const bannerFluid = banner ? banner.childImageSharp.fluid : null;
    return (
        <Box display="flex" flexDirection="column" flexWrap="wrap" marginBottom={2}>
            <Box width="100%">
                {bannerFluid ? (
                    <GatsbyLink to={slug}>
                        <Img fluid={{ ...bannerFluid, aspectRatio: 3 / 2 }} alt={title} />
                    </GatsbyLink>
                ) : null}
            </Box>

            <Box paddingTop={2}>
                <ItemTags tags={tags} />
            </Box>
            <Typography color="textPrimary" variant="h6" component="h3" style={{ paddingTop: '1rem' }}>
                <Link to={slug}>{title}</Link>
            </Typography>
            <Typography variant="body1" color="textSecondary">
                {excerpt}
            </Typography>
        </Box>
    );
}
