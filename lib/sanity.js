import {
  createImageUrlBuilder,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
  createCurrentUserHook,
} from 'next-sanity';
import { useNextSanityImage } from 'next-sanity-image';

import { config } from './config';

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const urlForNextImage = (source) =>
  useNextSanityImage(config, source, {
    blurUpImageWidth: 124,
    blurUpImageQuality: 40,
    blurUpAmount: 24,
  });

// live preview hook
export const usePreviewSubscription = createPreviewSubscriptionHook(config);

// Portable Text serialization
export const PortableText = createPortableTextComponent({
  ...config,
  // Serializers passed to @sanity/block-content-to-react
  // (https://github.com/sanity-io/block-content-to-react)
  serializers: {},
});

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config);
