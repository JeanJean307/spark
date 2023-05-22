import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Spa = React.forwardRef(
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
          '<mask id="mask0_1508_5013" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="5" y="5" width="15" height="14"><path d="M5 5.19995H20V18.2H5V5.19995Z"/></mask><g mask="url(#mask0_1508_5013)"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.4049 17.107C15.3443 17.6028 14.2523 17.5059 13.5301 17.3412C13.5331 17.3404 13.5361 17.3389 13.5383 17.3381C13.6201 17.3061 13.7161 17.2656 13.8233 17.2176C13.8376 17.2115 13.8503 17.2054 13.8646 17.1993C13.9793 17.1474 14.1038 17.0871 14.2388 17.0162C14.2433 17.0139 14.2471 17.0116 14.2508 17.0101C15.1081 16.5585 16.3066 15.7109 17.0176 14.2882C17.0251 14.2729 17.0356 14.2607 17.0431 14.2447C17.8674 14.1867 18.6346 14.2859 19.0989 14.3706C18.6916 15.0716 17.7429 16.4829 16.4049 17.107ZM8.59431 17.107C7.25706 16.4829 6.30905 15.0716 5.90105 14.3706C6.3638 14.2859 7.12956 14.1844 7.95531 14.2447C7.96656 14.2683 7.98156 14.2874 7.99356 14.3103C8.10081 14.5231 8.21706 14.7268 8.34381 14.9145C8.35056 14.9252 8.35806 14.9343 8.36556 14.945C8.49306 15.1304 8.62881 15.302 8.76982 15.4645C8.78782 15.4851 8.80432 15.5065 8.82232 15.5263C8.96332 15.6842 9.10882 15.8292 9.25732 15.9642C9.28282 15.9886 9.30907 16.0115 9.33457 16.0351C9.48232 16.1656 9.63007 16.2869 9.77707 16.3967C9.79882 16.4135 9.82057 16.428 9.84232 16.444C10.1536 16.6706 10.4551 16.8537 10.7258 16.9971C10.7401 17.0047 10.7543 17.0124 10.7686 17.02C10.8998 17.0886 11.0198 17.1466 11.1308 17.197C11.1473 17.2046 11.1616 17.2115 11.1773 17.2183C11.2846 17.2656 11.3806 17.3061 11.4616 17.3381C11.4638 17.3389 11.4676 17.3404 11.4691 17.3412C10.7476 17.5059 9.65482 17.6021 8.59431 17.107ZM8.19531 9.03354C8.57706 9.25554 9.18232 9.64155 9.79207 10.1695C9.71782 10.4685 9.66157 10.7744 9.61882 11.0849C9.60982 11.1444 9.60307 11.2031 9.59557 11.2619C9.56182 11.5518 9.53782 11.8432 9.53782 12.1384C9.53782 12.3474 9.54757 12.5526 9.56557 12.7533C9.57682 12.886 9.59707 13.0142 9.61582 13.1431C9.62407 13.2049 9.63007 13.2682 9.64057 13.3285C9.67057 13.5055 9.70732 13.6771 9.74857 13.8465C9.75007 13.8526 9.75157 13.8594 9.75307 13.8655C9.96982 14.7466 10.3253 15.5156 10.7048 16.1496C10.6328 16.1053 10.5586 16.055 10.4836 16.0046C10.4123 15.9573 10.3411 15.9108 10.2683 15.8574C10.1573 15.7765 10.0456 15.6842 9.93382 15.5904C9.87007 15.5362 9.80707 15.4813 9.74407 15.4233C9.63007 15.318 9.51757 15.2059 9.40732 15.0861C9.34657 15.019 9.28807 14.9458 9.22882 14.874C9.12607 14.7497 9.02482 14.6231 8.93032 14.4835C8.84257 14.3522 8.76532 14.2073 8.68806 14.0631C8.63481 13.9655 8.57556 13.8762 8.52756 13.7717C7.77081 12.0705 8.02806 9.94898 8.19531 9.03354ZM12.4996 6.15678C12.9856 6.83725 13.9883 8.39121 14.4728 10.1977C14.5493 10.4845 14.6063 10.766 14.6506 11.0437C14.6573 11.0872 14.6701 11.1291 14.6761 11.1719C14.7241 11.5037 14.7481 11.8264 14.7481 12.1384C14.7481 12.439 14.7218 12.7289 14.6821 13.0111C14.6686 13.1057 14.6476 13.1957 14.6303 13.288C14.5958 13.4734 14.5583 13.6565 14.5103 13.832C14.4833 13.9296 14.4533 14.0242 14.4233 14.1188C14.3701 14.2866 14.3123 14.4499 14.2493 14.6078C14.2178 14.6871 14.1863 14.768 14.1526 14.8443C14.0716 15.0297 13.9853 15.2082 13.8961 15.3775C13.8773 15.4126 13.8601 15.4508 13.8413 15.4851C13.3598 16.3647 12.8063 17.0078 12.4996 17.3297C12.1928 17.0078 11.6386 16.3632 11.1571 15.4828C11.1398 15.4523 11.1241 15.418 11.1083 15.3867C11.0161 15.2135 10.9291 15.0312 10.8458 14.8412C10.8128 14.7672 10.7828 14.6894 10.7521 14.6116C10.6876 14.4522 10.6298 14.2859 10.5751 14.1158C10.5458 14.0227 10.5166 13.9296 10.4903 13.8343C10.4416 13.6573 10.4041 13.4719 10.3688 13.2858C10.3523 13.1942 10.3313 13.105 10.3178 13.0119C10.2781 12.7296 10.2518 12.439 10.2518 12.1384C10.2518 11.8264 10.2766 11.5037 10.3231 11.1734C10.3313 11.1169 10.3478 11.0635 10.3568 11.0078C10.4003 10.7431 10.4536 10.4746 10.5263 10.2C11.0108 8.39274 12.0143 6.83725 12.4996 6.15678ZM16.8054 9.03278C16.9741 9.95356 17.2366 12.0957 16.4596 13.806C16.3374 14.0746 16.1911 14.3172 16.0344 14.543C15.9834 14.6162 15.9279 14.681 15.8739 14.7505C15.7629 14.8954 15.6481 15.035 15.5281 15.1616C15.4636 15.2295 15.3976 15.2944 15.3316 15.3569C15.2123 15.4698 15.0923 15.5766 14.9708 15.6735C14.9071 15.7246 14.8441 15.7773 14.7803 15.8238C14.6446 15.9245 14.5111 16.0153 14.3798 16.0977C14.3506 16.116 14.3213 16.1374 14.2921 16.1541C14.6723 15.5187 15.0301 14.7482 15.2476 13.8632C15.2483 13.861 15.2483 13.8587 15.2491 13.8564C15.2911 13.684 15.3286 13.5085 15.3593 13.3277C15.3698 13.2697 15.3751 13.2087 15.3833 13.15C15.4028 13.0188 15.4223 12.8883 15.4343 12.7533C15.4523 12.5526 15.4628 12.3474 15.4628 12.1384C15.4628 11.8432 15.4381 11.551 15.4043 11.2611C15.3976 11.2039 15.3901 11.1459 15.3818 11.0872C15.3383 10.7767 15.2821 10.4693 15.2078 10.1695C15.8184 9.64155 16.4229 9.25554 16.8054 9.03278ZM19.9674 13.9655C19.9231 13.8671 19.8384 13.7938 19.7356 13.7664C19.6854 13.7526 18.6294 13.4673 17.3386 13.5024C18.1021 11.1589 17.4309 8.51251 17.3994 8.39121C17.3724 8.2867 17.3004 8.20049 17.2044 8.15549C17.1076 8.10895 16.9974 8.11048 16.9006 8.15701C16.8579 8.17761 15.9699 8.61244 14.9866 9.41345C14.2366 7.14392 12.8543 5.4229 12.7748 5.32525C12.6391 5.15818 12.3608 5.15818 12.2251 5.32525C12.1456 5.4229 10.7633 7.14392 10.0133 9.41345C9.03007 8.61244 8.14131 8.17761 8.09931 8.15701C8.00256 8.10971 7.89231 8.10895 7.79556 8.15549C7.69956 8.20049 7.62756 8.2867 7.60056 8.39121C7.56906 8.51251 6.89781 11.1589 7.66056 13.5032C6.3698 13.4681 5.31455 13.7526 5.2643 13.7664C5.16155 13.7938 5.0768 13.8671 5.03255 13.9655C4.9883 14.0639 4.98905 14.1768 5.03555 14.2737C5.08355 14.3774 6.25055 16.8125 8.29656 17.7676C8.99032 18.0911 9.69082 18.2001 10.3178 18.2001C11.0491 18.2001 11.6678 18.0537 12.0751 17.927C12.1786 18.03 12.2491 18.0956 12.2656 18.1094C12.3323 18.1696 12.4163 18.1994 12.4996 18.1994C12.5836 18.1994 12.6676 18.1696 12.7343 18.1094C12.7501 18.0956 12.8213 18.03 12.9248 17.927C13.3321 18.0537 13.9508 18.2001 14.6821 18.2001C15.3091 18.2001 16.0089 18.0911 16.7026 17.7676C18.7486 16.8125 19.9164 14.3774 19.9651 14.2737C20.0109 14.1768 20.0116 14.0639 19.9674 13.9655Z"/></g>',
      }}
    />
  )
)

Spa.displayName = 'Spa'

export const tags = ['Spa', '']
