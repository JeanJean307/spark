import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Fireplace = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M18.0845 16.258H16.7945V11.0162C16.7945 10.8095 16.6265 10.6417 16.4195 10.6417H8.5805C8.3735 10.6417 8.2055 10.8095 8.2055 11.0162V16.258H6.9155V8.74241H18.0845V16.258ZM11.5617 16.258C11.21 15.7981 11.105 15.363 11.1013 15.0559C11.4133 15.2439 11.7597 15.4094 11.9675 15.4559C12.0725 15.4783 12.185 15.4551 12.272 15.39C12.3598 15.3248 12.4145 15.2252 12.422 15.1173L12.4318 14.9309C12.4475 14.5789 12.4768 13.9138 12.7153 13.5333C12.9575 13.8666 13.0723 14.5174 13.0723 14.9443C13.0723 15.0874 13.1532 15.2169 13.2815 15.2799C13.4097 15.345 13.5628 15.3285 13.676 15.2417C13.9175 15.0559 14.132 14.9031 14.351 14.7863C14.339 15.3795 14.1095 16.1104 13.7975 16.258H11.5617ZM16.0445 16.258H14.7507C15.0912 15.5982 15.1722 14.6822 15.0342 14.1512C15.008 14.0524 14.9427 13.9677 14.8527 13.9183C14.7627 13.8689 14.657 13.8591 14.5588 13.8883C14.2595 13.982 13.9955 14.1168 13.7585 14.2651C13.6647 13.7116 13.4322 12.9761 12.857 12.6885C12.737 12.6286 12.5907 12.6376 12.4782 12.7148C11.8865 13.1177 11.7478 13.931 11.7028 14.5362C11.486 14.4201 11.2467 14.2703 11.1042 14.143C11.0217 14.0673 10.9092 14.0336 10.7982 14.0509C10.6872 14.0666 10.5898 14.1317 10.532 14.2276C10.298 14.6178 10.2433 15.4311 10.6753 16.258H8.9555V11.3906H16.0445V16.258ZM5.75 17.451H19.25V17.0069H5.75V17.451ZM5.75 7.99348H19.25V7.54936H5.75V7.99348ZM8.85725 5.94889H16.1428L16.4525 6.80042H8.5475L8.85725 5.94889ZM19.625 8.74241C19.8328 8.74241 20 8.57465 20 8.36794V7.17489C20 6.96818 19.8328 6.80042 19.625 6.80042H17.2505L16.757 5.44635C16.7038 5.29881 16.5628 5.19995 16.4053 5.19995H8.59475C8.43725 5.19995 8.29625 5.29881 8.24225 5.44635L7.7495 6.80042H5.375C5.168 6.80042 5 6.96818 5 7.17489V8.36794C5 8.57465 5.168 8.74241 5.375 8.74241H6.1655V16.258H5.375C5.168 16.258 5 16.4257 5 16.6324V17.8255C5 18.0322 5.168 18.2 5.375 18.2H19.625C19.8328 18.2 20 18.0322 20 17.8255V16.6324C20 16.4257 19.8328 16.258 19.625 16.258H18.8345V8.74241H19.625Z"/>',
      }}
    />
  )
)

Fireplace.displayName = 'Fireplace'

export const tags = ['fireplace', 'criteria', 'location']
