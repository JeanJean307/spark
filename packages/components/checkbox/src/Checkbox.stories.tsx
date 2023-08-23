/* eslint-disable max-lines */
import { StoryLabel } from '@docs/helpers/StoryLabel'
import { Button } from '@spark-ui/button'
import { FormField } from '@spark-ui/form-field'
import { Close } from '@spark-ui/icons/dist/icons/Close'
import { Plus } from '@spark-ui/icons/dist/icons/Plus'
import { Label } from '@spark-ui/label'
import { VisuallyHidden } from '@spark-ui/visually-hidden'
import { Meta, StoryFn } from '@storybook/react'
import { cx } from 'class-variance-authority'
import { useId, useState } from 'react'

import { Checkbox, CheckboxProps } from './Checkbox'
import { CheckboxGroup } from './CheckboxGroup'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
}

export default meta

export const Default: StoryFn = _args => (
  <Checkbox className="max-w-sz-432">
    Refuse terms and conditions, because you are so unhappy with it. There is no reason to accept
    that, it’s unfair!
  </Checkbox>
)

export const DefaultGroup: StoryFn = _args => (
  <CheckboxGroup name="sport">
    <Checkbox value="soccer">Soccer</Checkbox>
    <Checkbox value="tennis">Tennis</Checkbox>
    <Checkbox value="baseball">Baseball</Checkbox>
  </CheckboxGroup>
)

export const Uncontrolled: StoryFn = () => {
  const handleCheckedChange = (current: boolean, indeterminate?: boolean) => {
    console.log(current, indeterminate)
  }

  return (
    <div className="flex flex-col gap-lg">
      <Checkbox defaultChecked onCheckedChange={handleCheckedChange}>
        Accept terms and conditions
      </Checkbox>
    </div>
  )
}

export const UncontrolledGroup: StoryFn = () => {
  const handleCheckedChange = (value: string[]) => {
    console.log(value)
  }

  return (
    <CheckboxGroup defaultValue={['soccer', 'tennis']} onCheckedChange={handleCheckedChange}>
      <Checkbox value="soccer">Soccer</Checkbox>
      <Checkbox value="tennis">Tennis</Checkbox>
      <Checkbox value="baseball">Baseball</Checkbox>
    </CheckboxGroup>
  )
}

export const Controlled: StoryFn = () => {
  const [checked, setChecked] = useState(true)

  const handleCheckedChange = (current: boolean) => {
    setChecked(current)
  }

  return (
    <div className="flex gap-lg">
      <Checkbox checked={checked} onCheckedChange={handleCheckedChange}>
        Accept terms and conditions
      </Checkbox>

      <Checkbox checked="indeterminate" onCheckedChange={handleCheckedChange}>
        Accept terms and conditions
      </Checkbox>
    </div>
  )
}

export const ControlledGroup: StoryFn = () => {
  const [value, setValue] = useState<string[]>([])

  const handleCheckedChange = (current: string[]) => {
    setValue(current)
  }

  return (
    <CheckboxGroup value={value} onCheckedChange={handleCheckedChange}>
      <Checkbox value="soccer">Soccer</Checkbox>
      <Checkbox value="tennis">Tennis</Checkbox>
      <Checkbox value="baseball">Baseball</Checkbox>
    </CheckboxGroup>
  )
}

export const Disabled: StoryFn = _args => <Checkbox disabled>Accept terms and conditions</Checkbox>

const intent = [
  'main',
  'support',
  'accent',
  'basic',
  'success',
  'alert',
  'error',
  'info',
  'neutral',
] as const

export const Intent: StoryFn = _args => (
  <div className="flex flex-col gap-lg">
    {intent.map(color => {
      return (
        <Checkbox className="capitalize" key={color} intent={color} defaultChecked>
          {color}
        </Checkbox>
      )
    })}
  </div>
)

export const Icon: StoryFn = _args => (
  <div className="flex flex-col gap-lg">
    <Checkbox defaultChecked icon={<Close />}>
      Accept terms and conditions
    </Checkbox>
    <Checkbox checked="indeterminate" indeterminateIcon={<Plus />}>
      Accept terms and conditions
    </Checkbox>
  </div>
)

export const GroupOrientation: StoryFn = _args => {
  return (
    <div className="flex flex-col gap-xl">
      <div>
        <StoryLabel>Vertical (default)</StoryLabel>

        <CheckboxGroup orientation="vertical">
          <Checkbox value="soccer">Soccer</Checkbox>
          <Checkbox value="tennis">Tennis</Checkbox>
          <Checkbox value="baseball">Baseball</Checkbox>
        </CheckboxGroup>
      </div>
      <div>
        <StoryLabel>Horizontal</StoryLabel>

        <CheckboxGroup orientation="horizontal">
          <Checkbox value="soccer">Soccer</Checkbox>
          <Checkbox value="tennis">Tennis</Checkbox>
          <Checkbox value="baseball">Baseball</Checkbox>
        </CheckboxGroup>
      </div>
    </div>
  )
}

export const Indeterminate: StoryFn = () => {
  const [checked, setChecked] = useState<CheckboxProps['checked']>('indeterminate')

  return (
    <div className="inline-flex flex-col gap-xl">
      <Checkbox checked={checked} onCheckedChange={setChecked}>
        Indeterminate
      </Checkbox>

      <Button
        type="button"
        onClick={() =>
          setChecked(prevIsChecked => (prevIsChecked === 'indeterminate' ? false : 'indeterminate'))
        }
      >
        Toggle indeterminate
      </Button>
    </div>
  )
}

export const CustomImplementation: StoryFn = () => {
  const CustomCheckbox = ({ children, checked, ...others }: CheckboxProps) => {
    const id = useId()
    const { value } = others

    return (
      <Label
        id={id}
        htmlFor={value}
        className={cx(
          'flex max-w-sz-320 flex-wrap gap-md rounded-md p-lg shadow',
          checked ? 'bg-success/dim-4' : '',
          'cursor-pointer',
        )}
      >
        <Checkbox aria-labelledby={id} id={value} checked={checked} {...others} />
        {children}
      </Label>
    )
  }

  const Example = () => {
    const [checked, setChecked] = useState(['A'])

    const values = ['A', 'B', 'C']

    return (
      <CheckboxGroup value={checked} name="sport" onCheckedChange={setChecked}>
        {values.map(value => {
          return (
            <CustomCheckbox key={value} value={value} checked={checked.includes(value)}>
              <div className="flex grow justify-between">
                <span className="font-bold">{value}</span>
                <span>this is a custom</span>
              </div>
              <div className="w-full text-right italic">implementation of a checkbox</div>
            </CustomCheckbox>
          )
        })}
      </CheckboxGroup>
    )
  }

  return <Example />
}

export const InvisibleCheckbox: StoryFn = () => {
  const CustomCheckbox = ({ children, checked, ...others }: CheckboxProps) => {
    const id = useId()
    const { value } = others

    return (
      <Label
        id={id}
        htmlFor={value}
        className={cx(
          'flex max-w-sz-320 flex-wrap gap-md rounded-md p-lg shadow',
          checked ? 'bg-success/dim-3' : '',
          'focus-within:ring-outline-high',
          '[&:has(:focus-visible)]:focus-within:ring-2',
          'cursor-pointer',
        )}
      >
        <VisuallyHidden>
          <Checkbox aria-labelledby={id} id={value} checked={checked} {...others} />
        </VisuallyHidden>
        {children}
      </Label>
    )
  }

  const Example = () => {
    const [checked, setChecked] = useState(['D'])

    const values = ['D', 'E', 'F']

    return (
      <CheckboxGroup value={checked} name="sport" onCheckedChange={setChecked}>
        {values.map(value => {
          return (
            <CustomCheckbox key={value} value={value} checked={checked.includes(value)}>
              <div className="flex grow justify-between">
                <span className="font-bold">{value}</span>
                <span>this is a custom</span>
              </div>
              <div className="w-full text-right italic">implementation of a checkbox</div>
            </CustomCheckbox>
          )
        })}
      </CheckboxGroup>
    )
  }

  return <Example />
}

export const FieldLabel: StoryFn = _args => {
  return (
    <FormField name="sport">
      <FormField.Label>Sports</FormField.Label>

      <CheckboxGroup>
        <Checkbox value="soccer">Soccer</Checkbox>
        <Checkbox value="tennis">Tennis</Checkbox>
        <Checkbox value="baseball">Baseball</Checkbox>
      </CheckboxGroup>
    </FormField>
  )
}

export const FieldHiddenLabel: StoryFn = _args => {
  return (
    <FormField name="sport">
      <VisuallyHidden>
        <FormField.Label>Sports</FormField.Label>
      </VisuallyHidden>

      <CheckboxGroup>
        <Checkbox value="soccer">Soccer</Checkbox>
        <Checkbox value="tennis">Tennis</Checkbox>
        <Checkbox value="baseball">Baseball</Checkbox>
      </CheckboxGroup>
    </FormField>
  )
}

export const FieldRequired: StoryFn = _args => {
  return (
    <FormField name="sport" isRequired>
      <FormField.Label>Sports</FormField.Label>

      <CheckboxGroup>
        <Checkbox value="soccer">Soccer</Checkbox>
        <Checkbox value="tennis">Tennis</Checkbox>
        <Checkbox value="baseball">Baseball</Checkbox>
      </CheckboxGroup>
    </FormField>
  )
}

export const FieldHelperMessage: StoryFn = _args => {
  return (
    <FormField name="title">
      <FormField.Label>Sports</FormField.Label>

      <CheckboxGroup>
        <Checkbox value="soccer">Soccer</Checkbox>
        <Checkbox value="tennis">Tennis</Checkbox>
        <Checkbox value="baseball">Baseball</Checkbox>
      </CheckboxGroup>

      <FormField.HelperMessage>Practicing sports is good for your health</FormField.HelperMessage>
    </FormField>
  )
}

export const FieldInvalid: StoryFn = () => {
  const [value, setValue] = useState<string[]>([])

  return (
    <FormField name="sports" state={!value.length ? 'error' : undefined}>
      <FormField.Label>Sports</FormField.Label>

      <CheckboxGroup value={value} onCheckedChange={setValue}>
        <Checkbox value="soccer">Soccer</Checkbox>
        <Checkbox value="tennis">Tennis</Checkbox>
        <Checkbox value="baseball">Baseball</Checkbox>
      </CheckboxGroup>

      <FormField.ErrorMessage>You must chose a sport among the list</FormField.ErrorMessage>
    </FormField>
  )
}
