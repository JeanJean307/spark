import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const ClockArrowOutline = React.forwardRef(
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
          '<path d="M17.9349 3.95115C19.9254 5.41815 21.2999 7.56974 21.7922 9.9896C22.2011 11.9523 22.0036 13.9927 21.2258 15.8411C20.4693 17.6644 19.1878 19.2228 17.5434 20.3191C15.8989 21.4154 13.9655 22.0004 11.9878 22C11.7293 22 11.4814 21.8976 11.2986 21.7152C11.1158 21.5328 11.0131 21.2855 11.0131 21.0275C11.0131 20.7696 11.1158 20.5223 11.2986 20.3399C11.4814 20.1575 11.7293 20.0551 11.9878 20.0551C13.5821 20.0577 15.1415 19.5892 16.4693 18.7086C17.7892 17.8204 18.82 16.5665 19.4348 15.1013C19.8921 14.0032 20.0994 12.8175 20.0419 11.6297C19.9844 10.442 19.6634 9.28169 19.1022 8.23265C18.5409 7.18362 17.7534 6.27195 16.7963 5.56331C15.8393 4.85468 14.7366 4.36675 13.5677 4.13474C12.3988 3.90274 11.1929 3.93242 10.0369 4.22164C8.88092 4.51087 7.80365 5.05242 6.88278 5.80728C5.96191 6.56213 5.22036 7.51148 4.71164 8.58685C4.20292 9.66222 3.93969 10.8368 3.94092 12.026C3.94254 13.702 4.40964 15.3448 5.29039 16.772L5.49864 15.9408C5.5789 15.7114 5.74232 15.5203 5.95673 15.4051C6.17114 15.2899 6.42102 15.259 6.65714 15.3184C6.89326 15.3778 7.09856 15.5233 7.23258 15.7262C7.36659 15.929 7.41961 16.1746 7.38124 16.4146L6.68983 19.1823V19.2572C6.66714 19.315 6.63928 19.3706 6.60655 19.4234C6.57532 19.4792 6.53907 19.5321 6.49826 19.5813C6.48646 19.6067 6.46943 19.6294 6.44828 19.6478C6.42318 19.6746 6.39166 19.6947 6.35666 19.706L6.28167 19.7808H6.19839L6.0151 19.839C5.95705 19.8468 5.89824 19.8468 5.8402 19.839C5.7766 19.8472 5.71217 19.8472 5.64857 19.839H5.54028L2.7664 19.1491C2.51676 19.0874 2.30189 18.9292 2.1691 18.7095C2.03632 18.4897 1.99646 18.2263 2.05832 17.9772C2.12018 17.7281 2.2787 17.5137 2.49897 17.3812C2.60804 17.3156 2.72899 17.2721 2.85492 17.2531C2.98084 17.2341 3.10927 17.2401 3.23288 17.2706H3.42446C2.49903 15.6432 2.00849 13.8057 2 11.9346C2.0098 9.46535 2.93721 7.08755 4.60274 5.26126C6.26827 3.43498 8.55352 2.29005 11.0163 2.04804C13.4791 1.80603 15.9443 2.48414 17.9349 3.95115Z"/><path d="M14.1782 16.4022C13.9518 16.3398 13.7554 16.1977 13.6253 16.0021L12.1253 12.9604H7.16698C7.03193 12.973 6.89575 12.9571 6.76715 12.9141C6.63855 12.871 6.52035 12.8015 6.42012 12.7101C6.31988 12.6188 6.23981 12.5075 6.18503 12.3835C6.13024 12.2594 6.10197 12.1252 6.10197 11.9896C6.10197 11.8539 6.13024 11.7198 6.18503 11.5957C6.23981 11.4717 6.31988 11.3604 6.42012 11.2691C6.52035 11.1777 6.63855 11.1082 6.76715 11.0651C6.89575 11.022 7.03193 11.0062 7.16698 11.0188H12.7253C12.9002 11.0251 13.0702 11.0789 13.2169 11.1743C13.3637 11.2697 13.4818 11.4032 13.5586 11.5604L15.367 15.1687C15.4377 15.3928 15.4251 15.6348 15.3316 15.8503C15.2381 16.0658 15.0699 16.2403 14.858 16.3417C14.6461 16.4431 14.4047 16.4646 14.1782 16.4022Z"/>',
      }}
    />
  )
)

ClockArrowOutline.displayName = 'ClockArrowOutline'

export const tags = ['ClockArrowOutline', '']
