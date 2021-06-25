// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Import custom schema
import homepage from './documents/homepage';
import post from './documents/post';
import page from './documents/page';
import siteheader from './documents/siteheader';
import navigation from './documents/navigation';
import navItem from './objects/navItem';
import link from './objects/link';
import textBlock from './objects/textBlock';
import standardImageBlock from './objects/standardImageBlock.js';
import largeTextWithImages from './objects/largeTextWithImages';
import sideContent from './objects/sideContent';
import largeText from './objects/largeText';
import fullWidthImage from './objects/fullWidthImage';
import carouselSideImageLeft from './objects/carouselSideImageLeft';
import carouselItem from './objects/carouselItem';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Append to the list of schemas */
    homepage,
    siteheader,
    navigation,
    navItem,
    link,
    page,
    post,
    textBlock,
    standardImageBlock,
    largeTextWithImages,
    sideContent,
    largeText,
    fullWidthImage,
    carouselSideImageLeft,
    carouselItem,
  ]),
});
