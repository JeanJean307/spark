import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Import = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M11.9998 2.39993C12.5521 2.39993 12.9998 2.84764 12.9998 3.39992L12.9999 13.1583L15.3946 10.3645C15.754 9.94522 16.3853 9.89665 16.8046 10.2561C17.2239 10.6155 17.2725 11.2468 16.9131 11.6661L12.7592 16.5123C12.5692 16.7339 12.2919 16.8615 12 16.8615C11.708 16.8615 11.4307 16.7339 11.2407 16.5123L7.08685 11.6661C6.72743 11.2468 6.77599 10.6155 7.19532 10.2561C7.61464 9.89665 8.24595 9.94521 8.60537 10.3645L10.9999 13.1582L10.9998 3.39995C10.9998 2.84766 11.4475 2.39994 11.9998 2.39993ZM3 16.2461C3.55229 16.2461 4 16.6938 4 17.2461V18.6307C4 19.0999 4.18641 19.5499 4.5182 19.8817C4.85 20.2135 5.30001 20.3999 5.76924 20.3999H18.2308C18.7 20.3999 19.15 20.2135 19.4818 19.8817C19.8136 19.5499 20 19.0999 20 18.6307V17.2461C20 16.6938 20.4478 16.2461 21 16.2461C21.5523 16.2461 22 16.6938 22 17.2461V18.6307C22 19.6304 21.6029 20.5891 20.8961 21.2959C20.1892 22.0028 19.2305 22.3999 18.2308 22.3999H5.76924C4.76957 22.3999 3.81085 22.0028 3.10398 21.2959C2.39712 20.5891 2 19.6304 2 18.6307V17.2461C2 16.6938 2.44772 16.2461 3 16.2461Z"/>',
      }}
    />
  )
)

Import.displayName = 'Import'

export const tags = ['Import', '']
