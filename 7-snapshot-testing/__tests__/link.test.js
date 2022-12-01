// Copyright 2004-present Facebook. All Rights Reserved.

'use strict'

import renderer from 'react-test-renderer'
import Link from '../Link'

it('renders correctly', () => {
  const tree = renderer
    .create(<Link page="http://www.instagram.com">instagram</Link>)
    .toJSON()
  expect(tree).toMatchInlineSnapshot(`
<a
  className="normal"
  href="http://www.instagram.com"
  onMouseEnter={[Function]}
  onMouseLeave={[Function]}
>
  instagram
</a>
`)
})

it('renders as an anchor when no page is set', () => {
  const tree = renderer.create(<Link>Instagram</Link>).toJSON()
  expect(tree).toMatchSnapshot()
})

it('properly escapes quotes', () => {
  const tree = renderer
    .create(<Link>{"\"Facebook\" \\'is \\ 'awesome'"}</Link>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('changes the class when hovered', () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseEnter()
  })
  // re-rendering
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseLeave()
  })
  // re-rendering
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
