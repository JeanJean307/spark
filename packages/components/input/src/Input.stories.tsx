import { StoryLabel } from '@docs/helpers/StoryLabel'
import { Checkbox } from '@spark-ui/checkbox'
import { FormField } from '@spark-ui/form-field'
import { Icon } from '@spark-ui/icon'
import { IconButton } from '@spark-ui/icon-button'
import { Check } from '@spark-ui/icons/dist/icons/Check'
import { EyeOffOutline } from '@spark-ui/icons/dist/icons/EyeOffOutline'
import { EyeOutline } from '@spark-ui/icons/dist/icons/EyeOutline'
import { PenOutline } from '@spark-ui/icons/dist/icons/PenOutline'
import { VisuallyHidden } from '@spark-ui/visually-hidden'
import { Meta, StoryFn } from '@storybook/react'
import { ChangeEvent, useState } from 'react'

import { Input, InputGroup } from '.'

const meta: Meta<typeof Input> = {
  title: 'Experimental/Input',
  component: Input,
}

export default meta

export const Usage: StoryFn = _args => <Input placeholder="Type here..." aria-label="Phone type" />

export const Uncontrolled: StoryFn = _args => (
  <Input defaultValue="IPhone 12" aria-label="Phone type" />
)

export const Controlled: StoryFn = () => {
  const [value, setValue] = useState('IPhone 13')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return <Input value={value} onChange={handleChange} aria-label="Phone type" />
}

export const Disabled: StoryFn = _args => (
  <Input defaultValue="IPhone" disabled aria-label="Phone type" />
)

export const Addons: StoryFn = _args => {
  return (
    <InputGroup>
      <InputGroup.LeadingAddon className="px-lg">https://</InputGroup.LeadingAddon>
      <Input aria-label="Website" />
      <InputGroup.TrailingAddon className="px-lg">.com</InputGroup.TrailingAddon>
    </InputGroup>
  )
}

export const Icons: StoryFn = () => {
  const [isInvalid, setIsInvalid] = useState(false)

  return (
    <div className="flex flex-col items-start gap-lg">
      <InputGroup state={isInvalid ? 'error' : undefined}>
        <InputGroup.LeadingIcon>
          <Icon>
            <PenOutline />
          </Icon>
        </InputGroup.LeadingIcon>

        <Input placeholder="Type here..." />
        <InputGroup.TrailingIcon>
          <Icon>
            <Check />
          </Icon>
        </InputGroup.TrailingIcon>
      </InputGroup>

      <Checkbox checked={isInvalid} onClick={() => setIsInvalid(!isInvalid)}>
        Toggle error state
      </Checkbox>
    </div>
  )
}

export const PasswordInputExample: StoryFn = _args => {
  const [isVisible, setIsVisible] = useState(false)

  const handleToggle = () => {
    setIsVisible(isVisible => !isVisible)
  }

  return (
    <InputGroup>
      <Input type={isVisible ? 'text' : 'password'} />

      <InputGroup.TrailingAddon className="px-md">
        <IconButton
          className="!text-body-1"
          intent="neutral"
          design="ghost"
          size="sm"
          aria-label={isVisible ? 'Hide password' : 'Show password'}
          onClick={handleToggle}
        >
          <Icon>{isVisible ? <EyeOffOutline /> : <EyeOutline />}</Icon>
        </IconButton>
      </InputGroup.TrailingAddon>
    </InputGroup>
  )
}

export const States: StoryFn = _args => {
  return (
    <div className="flex flex-col gap-xl">
      <div>
        <StoryLabel>error</StoryLabel>
        <InputGroup state="error">
          <InputGroup.LeadingAddon className="px-lg">https://</InputGroup.LeadingAddon>
          <Input />
        </InputGroup>
      </div>

      <div>
        <StoryLabel>alert</StoryLabel>
        <InputGroup state="alert">
          <InputGroup.LeadingAddon className="px-lg">https://</InputGroup.LeadingAddon>
          <Input />
        </InputGroup>
      </div>

      <div>
        <StoryLabel>success</StoryLabel>
        <InputGroup state="success">
          <InputGroup.LeadingAddon className="px-lg">https://</InputGroup.LeadingAddon>
          <Input />
        </InputGroup>
      </div>
    </div>
  )
}

export const FieldLabel: StoryFn = _args => {
  return (
    <FormField name="title">
      <FormField.Label>Title</FormField.Label>

      <Input />
    </FormField>
  )
}

export const FieldHiddenLabel: StoryFn = _args => {
  return (
    <FormField name="title">
      <FormField.Label>
        <VisuallyHidden>Title</VisuallyHidden>
      </FormField.Label>

      <Input />
    </FormField>
  )
}

export const FieldRequired: StoryFn = _args => {
  return (
    <FormField name="title" isRequired>
      <FormField.Label>Title</FormField.Label>

      <Input />
    </FormField>
  )
}

export const FieldHelperMessage: StoryFn = _args => {
  return (
    <FormField name="title">
      <FormField.Label>Title</FormField.Label>

      <Input />

      <FormField.HelperMessage>
        An effective title significantly increases your chances of making a sale
      </FormField.HelperMessage>
    </FormField>
  )
}

export const FieldInvalid: StoryFn = _args => {
  return (
    <FormField name="title" state="error">
      <FormField.Label>Title</FormField.Label>

      <Input defaultValue="adevinta.com" />

      <FormField.ErrorMessage>The URL is invalid</FormField.ErrorMessage>
    </FormField>
  )
}
