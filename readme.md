
//installed npm packages:
npm install -g typescript //check with tsc.cmd --version
npm install -g tsd
tsd install --save angular angular-material


Use this comment to provide intellisense for TypeScript file:
<pre>
/// &lt;reference path="_all.ts" /&gt; 
</pre>

In app/src folder (where tsconfig.json is) run: <code>tsc.cmd -w</code>. This will watch the ts files and recompile when they are changed.
 
 