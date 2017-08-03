Experiment with styled-components/primitives, a styled version of react-primitives, which have the potential for becoming some set of elements that are renderable across any ui platform -- web, native, vr, sketch, etc.

### Observations

- Crazy amount of classNames attached to the primitive -- is this how react-native does it?
- There is no documentation -- go the source
- String-interpolated css is cool but kinda odd
- No prettier formatting inside the css string
- Nice error message showing me the real options when I get the react-native Stylesheet object wrong
- Would be nicer if attributes (like shorthands, eg `border-left`) would be split into the support `width`, `style`, and `color` attributes.
- react-primitives, which this derives from is still early and admittedly [hacky](https://github.com/lelandrichardson/react-primitives/blob/master/src/modules/Touchable.js#L20) at times
- Going to primitives at this level is making me think differently; there's mental overhead of needing to consider platform agnostics while I'm building the web version.  Still, the payoff could be really cool.
