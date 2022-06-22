import { Category } from './category';

export const AngularQuestions = [
  {
    question: 'What is angular',
    answer:
      'Angular is a JavaScript Binding framework which binds the HTML UI and Javascript Model. \nIt also helps you to build SPA by using the concept of routing.\nIt also has lot of other features like HTTP , DI , Input output because of which you do not\nneed other frameworks.',
    type: 'Basic',
  },
  {
    question: 'What are directives',
    answer: 'Directives help you to attach behaviour in the HTML DOM.',
    type: 'Basic',
  },
  {
    question: 'How many types of directives exists',
    answer:
      'Structural directives: - Change the DOM layout by adding and removing elements\nAttribute directives: - Change the appearance and behaviour of HTML elements.\nComponent directives: - Directives with templates. It’s like a user control.',
    type: 'Basic',
  },
  {
    question: 'Explain data bindings',
    answer:
      'Data binding defines how the view and component communicate with each other.',
    type: 'Basic',
  },
  {
    question: 'Different types of the data binding?',
    answer:
      'There are four types of bindings:\nExpression / Interpolation {{}}: - Data flows from component to the view and we can mix the same\nwith HTML tags.\nProperty binding []: - Data flows from component to the view\nEvent Binding (): - When you want to send event from the view to the component.\nTwo-way binding [()] :- Data flows from component to the view and vice versa',
    type: 'Basic',
  },
  {
    question: 'What are components and modules in Angular?',
    answer:
      'Component is where you write your binding code. Component Binds the UI and Model.\n\nModule groups components. In a big project we can have lot of UI, Component and Models,\nyou can logically group them by using Modules',
    type: 'Basic',
  },
  {
    question: 'What are services in Angular ?',
    answer:
      'Services helps you to share common logic across Angular projects. ',
  },
  {
    question: 'What are decorators in Angular ?',
    answer:
      'Decorator are meta-data which is applied / decorated on the class level as shown below. If you decorate “@Component” on the class the class is treated as Angular component.\n\nIf you decorate “@NgModule” on the class it becomes a Angular Module.',
    type: 'Basic',
  },
  {
    question: 'What is metadata or annotations in Angular ?',
    answer: 'Also termed as decorators',
    type: 'Basic',
  },
  {
    question: 'What are templates in Angular ?',
    answer:
      'An Angular template is an HTML view where you can use Angular Directives. You can write\ntemplate in two ways one is inline templates or you can have separate HTML file and link\nthe same',
    type: 'Basic',
  },
  {
    question: 'What is SPA?',
    answer:
      'SPA stands for Single page application. Single page application are applications where the\nmain UI gets loaded once and then the needed UI or data is loaded rather than making a full\npost back',
    type: 'Basic',
  },
  {
    question: 'How to implement SPA in Angular ?',
    answer:
      'In Angular it is implemented by using lazy routing concept.\nSPA or single page application are those applications where the main page is loaded once and\nthe other pages get loaded on demand.',
    type: 'Basic',
  },
  {
    question: 'Explain the importance of routing in Angular?',
    answer:
      'Routing helps you to define the navigation for your angular application. So if you want to\nmove from one screen to other screen and you want to respect SPA that means not loading\nand refreshing the whole UI routing is needed.\n',
    type: 'Basic',
  },
  {
    question: 'How do we implement the routing in Angular?',
    answer:
      '1. Create routing collection which defines the URL path and which component to load for that URL\n2. Later this routing collection is loaded using router module using “forroot” or\n“forchild”.\n3. Then we can use router-link directive on html anchor tag or in TS we can navigate\nusing router.navigate.',
    type: 'Basic',
  },
  {
    question: 'What is Lazy loading concept in Angular ?',
    answer:
      'Lazy loading means on demand loading. Loading only the necessary HTML , CSS and JavaScript files so that you have better performance',
    type: 'Basic',
  },
  {
    question: 'How to implement lazy loading in Angular?',
    answer:
      '1. The first thing is dividing your project in to modules.\n2. Create separate routing files for each module and use “loadChildren” and specify\nwhich modules to be loaded on demand.\n3. In routing navigation use “forRoot” to load the routes of the main module and\n“forChild” to load the child modules.',
    type: 'Basic',
  },
  {
    question: 'What is node ?',
    answer:
      'Its a javascript runtime which helps to run Javascript outside the browser . It does that by\nusing V8 chrome engine . Chrome V8 engine compiles javascript fully rather than interepting\nit.',
    type: 'Basic',
  },
  {
    question: 'What is NPM ?',
    answer:
      'Its a package manager which makes installation of Javascript framework easy',
    type: 'Basic',
  },
  {
    question: 'What is the importance of node_modules folder ?',
    answer:
      '“node_modules” is the folder where all the packages are installed.',
    type: 'Basic',
  },
  {
    question: 'What is package.json ?',
    answer:
      'It has all the Javascript references needed for a project. So rather than installing one package\nat a time we can install all packages in one go.\n',
    type: 'Basic',
  },
  {
    question: 'What is the importance of ^ and ~ in package.json?',
    answer: '^=>> Latest Minor version+ revision\n~ ==> Latest revision',
    type: 'Advanced',
  },
  {
    question: 'What is package-lock.json ?',
    answer:
      'It has the exact version which is installed after analysis of package.json',
    type: 'Basic',
  },
  {
    question: 'Explain the Flow of Angular ?',
    answer:
      'Index → Main → Module → Component ==> HTML\npushed the HTML in the selector of Index',
    type: 'Intermediate',
  },
  {
    question: 'What is the use of templateURL ?',
    answer: 'TemplateURL connect the component with the UI',
    type: 'Basic',
  },
  {
    question: 'What is typescript?',
    answer:
      'Typescript superset of JavaScript. It added types to JavaScript.\nIt gives a nice Object-oriented programming environment which transpiles / converts to\nJavaScript.\nSo as its strongly typed we will have less errors and because we can do OOP with JavaScript\nour productivity and quality also increases',
    type: 'Basic',
  },
  {
    question: 'What is the need of Angular CLI ?',
    answer:
      'Angular CLI is a command line interface by which we can create initial Angular project template. So\nrather than starting from scratch we have some boiler plate code.',
    type: 'Basic',
  },
  {
    question: 'What is Dependency Injection?',
    answer:
      'Dependency Injection is an application design pattern where rather than creating object\ninstances from within the component , Angular injects it via the constructor',
    type: 'Basic',
  },
  {
    question: 'What is the difference between ng serve and ng build?',
    answer:
      '“ng serve” builds inmemory while “ng build” builds on the hard disk. So when you want to\ngo for production “ng build” command is used.\n',
    type: 'Basic',
  },
  {
    question: 'What is the purpose of  - - prod?',
    answer:
      '–prod flag compresses your JS file , removes comments , creates GUIDs of your JS\nfiles and make your application ready for production.',
    type: 'Basic',
  },
  {
    question: 'In What scenarios will we use content projection ?',
    answer:
      'Content Projection is used when we want to project contents like HTML or Components from\nparent component to child component. These contents get projected in to a reserved tag by\nname “ng-content”.',
    type: 'Advanced',
  },
  {
    question: 'Explain Content Projection Slots in Angular?',
    answer:
      'Content projection slot helps to project specific content to specific "<ng-content>" tag\nsection..So if we have two “ng-content” sections in the contained component and from the\nparent component we want to project specific content to specific “ng-content” tags then we need to define Content projection slots.\n',
    type: 'Advanced',
  },
  {
    question: 'Why do we need “ViewChild” and “ViewChildren” in Angular?',
    answer:
      'Angular have two parts one is the view and the other is component or the code which handles the view data and events. Now in the component many times we would like to refer instance of view elements , that’s where “ViewChild” helps.\n\n“ViewChild” helps to reference view objects in the component to which it is connected.“ViewChild” references one object while “ViewChildren” references collection.',
    type: 'Intermediate',
  },
  {
    question: 'What’s Template reference variable?',
    answer:
      'A template reference variable is used to give reference to a DOM Element, a component,\ndirective, or a web component within a template. This variable can then be used anywhere inside the template or inside the component to reference the same.',
    type: 'Intermediate',
  },
  {
    question: 'Explain “ContentChild” and “ContentChildren” ?',
    answer:
      '“ContentChild” and “ContentChildren” helps to access projected contents from the parent\ncomponent.\n“ContentChild” references a single projected content while “ContentChildren” references collection.',
    type: 'Intermediate',
  },
  {
    question:
      'Differentiate between ViewChild , ViewChildren , ContentChild and ContentChildren ?',
    answer:
      '“ViewChild” and “ViewChildren” helps to reference view elements which belongs to HIS\nOWN VIEWS.\n“ContentChild” and “ContentChildren” helps to access view elements which is PROJECTED BY THE\nPARENT.',
    type: 'Intermediate',
  },
  {
    question: 'What is { static: true } in ViewChild ?',
    answer: null,
    type: 'Advanced',
  },
  {
    question: 'What’s the importance Angular component hooks / life cycle?',
    answer:
      'Component life cycle a.k.a angular component hooks are events which developers can tap in and write custom logic in the same. For instance if you want to write initialization code when the component starts first time then we can tap in to the “ngOninit()” function . If you want to write clean up code when the component is unloading then we have the “ngDestroy()” function .',
    type: 'Intermediate',
  },
  {
    question: 'Constructor',
    answer:
      'This is not really an event of angular it’s an event of typescript class. When\nyou create a object of a typescript class constructor fires first. And this will fire irrespective\nwe have angular or not. But still it does have lot of significance as it comes as the first event\nbefore any angular component event fires.',
    type: 'Intermediate',
  },
  {
    question: 'ngOnChanges',
    answer:
      'Called when data bound input property changes. This event is called before\nngOnInit()',
    type: 'Intermediate',
  },
  {
    question: 'ngOnInit',
    answer:
      'Called when first time the data-bound properties are displayed and here we set\nthe @input property values.',
    type: 'Intermediate',
  },
  {
    question: 'ngDoCheck',
    answer: 'Called whenever angular change detection runs',
    type: 'Intermediate',
  },
  {
    question: 'ngAfterContentInit',
    answer:
      "Called after Angular projects external content first into the component's\nview.",
    type: 'Intermediate',
  },
  {
    question: 'ngAfterContentChecked',
    answer:
      'After Angular checks the content projected into the component.\nThis is the change detection check for the contents projected.\n',
    type: 'Intermediate',
  },
  {
    question: 'ngAfterViewInit',
    answer:
      "After Angular initializes the component's views , child views and projected\ncontent this event fires.",
    type: 'Intermediate',
  },
  {
    question: 'ngAfterViewChecked',
    answer:
      'Once the default change detection run and content projected change\ndetection run this event fires',
    type: 'Intermediate',
  },
  {
    question: 'How to implement HTTP in Angular ?',
    answer:
      '• Import “HttpClientModule” at Module level.\n• Import “HttpClient” from “@angular/common/http” at component level.\n• Create object of “HttpClient” using Dependency injection.\n• You can then make “post” , “get” calls using “HttpClient”.\n• Using subscribe function to catch success and error response.',
    type: 'Intermediate',
  },
  {
    question: 'How to pass data between components?',
    answer:
      'Parent child: Input, Output & Event emitters, ViewChild.\n\nNavigating :Routing\n\nGlobal data :Services,Local storage, Temp storage',
    type: 'Intermediate',
  },
  {
    question: 'What are pipes ?\n',
    answer:
      'Pipes help you transform data on a Angular UI expression from one format to some other\nformat.',
    type: 'Intermediate',
  },
  {
    question: 'AsyncPipe',
    answer: 'Used to read the object from an asynchronous source',
    type: 'Intermediate',
  },
  {
    question: 'CurrencyPipe',
    answer: 'Used to format the currencies',
    type: 'Intermediate',
  },
  {
    question: 'DatePipe',
    answer: 'Used to format the dates',
    type: 'Intermediate',
  },
  {
    question: 'JsonPipe',
    answer: 'Converts an object into a JSON string',
    type: 'Intermediate',
  },
  {
    question: 'KeyValuePipe',
    answer: 'Converts an Object or Map into an array of key value pairs.',
    type: 'Intermediate',
  },
  {
    question: 'LowerCasePipe',
    answer: 'Converts a string or text to lowercase',
    type: 'Intermediate',
  },
  {
    question: 'What is RxJs and why do we need it ?',
    answer:
      'RxJs stands for Reactive extensions for JavaScript. RxJs helps to handle asynchronous data stream with ease.\nAssume you have a entity which is streaming async data, now this entity which is streaming async data can be HTTP response , Port which is streaming data , Timer emitting data and so on. This Async stream is coming in undecided intervals like stream of data. As a developer you would like to listen to this stream , run some logic on these stream and so on. RxJs makes this task easy',
    type: 'Advanced',
  },
  {
    question: 'What are observables and observers?',
    answer:
      'RxJs library helps to handle async data stream easily. But in order to access the async stream it has to be exposed as a rxJs Observable object. The listener who is interested in accessing the Observable stream is exposed as an observer. \n\nIn simple word observable represents async stream of data and observer subscribes to the observable to receive the stream.',
    type: 'Advanced',
  },
  {
    question: 'What is stream in RxJs ?\n',
    answer: 'Stream in RxJs is asynchronous data emitted from observables.',
    type: 'Advanced',
  },
  {
    question: 'What is the use of subscribe in RxJs ?',
    answer:
      '“Subscribe” function starts the stream from observable to the observer function. You can see in the below code how the subscribe function takes a function as reference. So when data is streamed from Observable its received by the Listener function.',
    type: 'Advanced',
  },
  {
    question: 'How to unsubscribe from the stream ?',
    answer:
      'We need to get reference of the “subscription” object. This subscription object is returned when we call the “subscribe” function. To unsubscribe we can call “unsubscribe” on the “sunscription” object.',
    type: 'Advanced',
  },
  {
    question: 'What are operators in RxJs?',
    answer:
      'Operators are logics which manipulate an observable stream and create new observable streams',
    type: 'Advanced',
  },
  {
    question: 'Differentiate between RxJs and Promises?',
    answer:
      'RxJs \nObservable return stream of data. \nYou can subscribe and unsubscribe stream. \n\nPromise\nPromise return single value.\nYou cannot cancel a promise\n',
    type: 'Advanced',
  },
  {
    question: 'Why is rxjs called Push/Reactive not pull/imperative ?',
    answer:
      'Imperative programming means listener code is responsible to pull stream of data. Reactive programming means you register a callback and the stream is responsible to push data. Some devs also visualize it as publisher and subscriber model as well.',
    type: 'Advanced',
  },
  {
    question: 'Name some rxJs Operators ?',
    answer:
      'Map, Filter, Merge,Concat,From,debouncetime, distinctuntilchanged, pluck, delay',
    type: 'Advanced',
  },
  {
    question: 'Map',
    answer: 'Transforms data in a observable in to a different format.',
    type: 'Advanced',
  },
  {
    question: 'Filter',
    answer: 'Allows data which meets conditions.',
    type: 'Advanced',
  },
  {
    question: 'Merge',
    answer:
      'This operator will combine multiple Observables into one. So if one of the\nobservables emit a value the combined one will emit as well.',
    type: 'Advanced',
  },
  {
    question: 'Concat',
    answer:
      'only when observable completes, it will start with the next observable',
    type: 'Advanced',
  },
  {
    question: 'From',
    answer:
      'This operator will turn array, promise or iterable into an observable.\n',
    type: 'Advanced',
  },
  {
    question: 'debouncetime',
    answer:
      "discard emitted values if a certain time didn't pass between the last\ninput\n",
    type: 'Advanced',
  },
  {
    question: 'distinctuntilchanged',
    answer: 'only emits a value if it is different than the last one.',
    type: 'Advanced',
  },
  {
    question: 'pluck',
    answer: 'select a property to emit.',
    type: 'Advanced',
  },
  {
    question: 'delay',
    answer: 'emits a value with a delay.',
    type: 'Advanced',
  },
  {
    question: 'JSON Web Token (JWT)',
    answer:
      'JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained method for securely transmitting information between parties encoded as a JSON object. \n\nThe token is self-contained and contains all the information it needs for authentication.\nTokens can be generated from anywhere\nWithin the token payload you can easily specify user roles and permissions as well as resources that the user can access.\n\nTokens are signed to protect against manipulation, they are not encrypted.What this means is that a token can be easily decoded and its contents revealed. If we navigate over the jwt.io, and paste the above token, we’ll be able to read the header and payload – but without the correct secret, the token is useless and we see the message “Invalid Signature.” If we add the correct secret, in this example, the string L3@RNJWT, we’ll now see a message saying “Signature Verified.”',
    type: 'Advanced',
  },
  {
    question: 'ANATOMY OF A JSON WEB TOKEN',
    answer:
      'A JSON Web Token consists of three parts: Header, Payload and Signature. \nThe header and payload are Base64 encoded, then concatenated by a period, finally the result is algorithmically signed producing a token in the form of header.claims.signature. The header consists of metadata including the type of token and the hashing algorithm used to sign the token. The payload contains the claims data that the token is encoding.',
    type: 'Advanced',
  },
  {
    question: 'How do I authenticate a JWT token?',
    answer:
      'To validate a JWT, your application needs to:\n\nCheck that the JWT is well formed.\nCheck the signature.\nCheck the standard claims.',
    type: 'Advanced',
  },
  {
    question: 'How to check that the JWT is well-formed?',
    answer:
      "Verify that the JWT contains three segments, separated by two period ('.') characters.\nParse the JWT to extract its three components. The first segment is the Header, the second is the Payload, and the third is the Signature. Each segment is base64url encoded.\nBase64url-decode the Header, ensuring that no line breaks, whitespace, or other additional characters have been used, and verify that the decoded Header is a valid JSON object.\nBase64url-decode the Payload, ensuring that no line breaks, whitespace, or other additional characters have been used, and verify that the decoded Payload is a valid JSON object.",
    type: 'Advanced',
  },
  {
    question: 'How to Check the JWT signature?',
    answer:
      'To verify that the signature is correct, you need to generate a new Base64url-encoded signature using the public key (RS256) or secret (HS256) and verify that it matches the original Signature included with the JWT',
    type: 'Advanced',
  },
  {
    question: 'How to Check standard claims in JWT?',
    answer:
      'Before using the token, you should retrieve the following standard claims from the decoded Payload and perform the following checks:\nToken expiration \nToken issuer',
    type: 'Advanced',
  },
  {
    question: 'Component Component Communication',
    answer:
      '1) Parent to Child: Sharing Data via @Input() decorator\n2) Child to Parent: Sharing Data via ViewChild\n3) Child to Parent: Sharing Data via Output() and EventEmitter\n4) Unrelated Components: Sharing Data with a Service\n5) Sharing data between sibling components\n6) Via routing URL',
    type: 'Intermediate',
  },
  {
    question: 'Sharing data between sibling components',
    answer:
      'First share data between the child to parent using output decorator and EventEmitter. Once received data in parent component share it to another child component using Input decorator. So siblings can talk each other via parent components.',
    type: 'Intermediate',
  },
  {
    question: '@Input',
    answer:
      '  It works by using the @Input() decorator to allow data to be passed via the template..\n\nEg: @Input() childMessage: string;',
    type: 'Intermediate',
  },
  {
    question: 'ViewChild',
    answer:
      'ViewChild allows a one component to be injected into another, giving the parent access to its attributes and functions. \n\nEg:@ViewChild(ChildComponent) child;',
    Column3:
      'https://www.digitalocean.com/community/tutorials/angular-viewchild-access-component',
    type: 'Intermediate',
  },
  {
    question: '@Output',
    answer:
      'Another way to share data is to emit data from the child, which can be listed to by the parent. ',
    type: 'Intermediate',
  },
  {
    question: 'Decorators',
    answer:
      'With decorators we can configure and customise our classes at design time. They are just functions that can be used to add meta-data, properties or functions to the thing they are attached to.',
    type: 'Basic',
  },
  {
    question: 'What is @NgModule in angular?',
    answer:
      "Defines a module that contains components, directives, pipes, and providers.\n\n@NgModule takes a metadata object that describes how to compile a component's template and how to create an injector at runtime. It identifies the module's own components, directives, and pipes, making some of them public, through the exports property, so that external components can use them.",
    type: 'Basic',
  },
  {
    question: 'What is @injectable in angular?',
    answer:
      "Declares that a class has dependencies that should be injected into the constructor when the dependency injector is creating an instance of this class.\n\nThe @Injectable() decorator marks it as a service that can be injected, but Angular can't actually inject it anywhere until you configure an Angular dependency injector with a provider of that service.",
    type: 'Basic',
  },
  {
    question: 'What is @pipe in angular?',
    answer:
      'Declares that a class is a pipe and provides metadata about the pipe.',
    type: 'Basic',
  },
  {
    question: 'What is @directive in angular?',
    answer:
      'Declares that a class is a directive and provides metadata about the directive.',
    type: 'Basic',
  },
  {
    question: 'What is @component in angular?',
    answer:
      'Declares that a class is a component and provides metadata about the component.\n\nComponents are like the basic building block in an Angular application. Components are defined using the @component decorator. A component has a selector , template , style and other properties, using which it specifies the metadata required to process the component.',
    type: 'Basic',
  },
  {
    question: 'What is a selector in angular?',
    answer:
      "The selector is a property inside the angular component which identifies the directive in a template and triggers instantiation of the directive. The selector has to be unique so that it doesn't override already existing element or component available by a number of third-party packages",
    type: 'Basic',
  },
  {
    question: 'Available Options in @Component',
    answer:
      'selector - The CSS selector that identifies this directive in a template and triggers instantiation of the directive\nproviders - Configures the injector of this directive or component with a token that maps to a provider of a dependency\nexportAs - Defines the name that can be used in the template to assign this directive to a variable\ntemplate - (string) - An inline template for an Angular component \ntemplateUrl - (string[]) - The relative path or absolute URL of a template file for an Angular component. \nstyles -  (string[]) - One or more inline CSS stylesheets to use in this component \nstyleUrls - (string[]) - One or more relative paths or absolute URLs for files containing CSS stylesheets to use in this component\nanimations - (any[]) - One or more animation trigger() calls, containing state() and transition() definitions\nencapsulation - An encapsulation policy for the template and CSS styles\nmoduleId - (string)  -  The module ID of the module that contains the component\nviewProviders - (Provider[]) - Defines the set of injectable objects that are visible to its view DOM children\nchangeDetection- (ChangeDetectionStrategy) - The change-detection strategy to use for this component\ninterpolation - Overrides the default encapsulation start and end delimiters ({{ and }})\npreserveWhitespaces - boolean - True to preserve or false to remove potentially superfluous whitespace characters from the compiled template. Whitespace characters are those matching the \\s character class in JavaScript regular expressions. Default is false, unless overridden in compiler options.',
    type: 'Intermediate',
  },
  {
    question: 'encapsulation',
    answer:
      '\nViewEncapsulation.Native: Deprecated. Use ViewEncapsulation.ShadowDom instead.\nViewEncapsulation.Emulated: Use shimmed CSS that emulates the native behavior.\nViewEncapsulation.None: Use global CSS without any encapsulation.\nViewEncapsulation.ShadowDom: Use Shadow DOM v1 to encapsulate styles.\n\nIf not supplied, the value is taken from CompilerOptions. The default compiler option is ViewEncapsulation.Emulated.',
    Column3:
      'https://angular-2-training-book.rangle.io/advanced-components/view_encapsulation',
    type: 'Intermediate',
  },
  {
    question: 'Directives',
    answer:
      'Directives are instructions in the DOM (Document Object Model). A directive is a class in Angular that is declared with a @Directive decorator.\nEvery directive has its own behaviour and can be imported into various components of an application. The directive is markers on a DOM element that tell Angular to attach a specified behavior to that DOM element or even transform the DOM element and its children.',
    type: 'Basic',
  },
  {
    question: 'Structural Directives',
    answer:
      'Structural directives change the DOM layout by adding and removing DOM elements. Structural directives are easy to recognize. An asterisk (*) precedes the directive attribute name.\n\nEg: *ngFor and *ngIf, *ngSwitch',
    Column3:
      "Also we can create customised directives using \n'ng generate directive dir_name' .\nRefer: https://angular.io/guide/attribute-directives",
    type: 'Basic',
  },
  {
    question: 'Attribute directives',
    answer:
      'Attribute directives change the appearance or behavior of an element.\n\nEg: ngClass and ngStyle',
    type: 'Basic',
  },
  {
    question: 'Components ',
    answer:
      'Components are basically directives with a template. Each component defines a class that contains application data and logic, and is associated with an HTML template that defines a view to be displayed in a target environment. The metadata for a component class associates it with a template that defines a view.',
    type: 'Basic',
  },
  {
    question: 'Difference between Components and Directives',
    answer:
      "1) A component is always elements ('E') where directives can be an element, attribute, class or comment ('E','A','C','M').\n2) Directives can modify DOM or data that is outside of their scope, but the component can only access data within isolated scope.\n3) Directives is used to add behavior to an existing DOM element.Components are typically used to create UI widgets.\n4) Component is used to break up the application into smaller components. Directive is use to design re-usable components.\n5) Directive don’t have View. @View decorator or templateurl template are mandatory in the component.\n6) You can’t define Pipes in directive.Component is used to define pipes.",
    type: 'Intermediate',
  },
  {
    question: 'ngFor',
    answer:
      'The ngForOf directive is generally used in the shorthand form *ngFor\n\nEg:\n\n<li *ngFor="let item of items; index as i; trackBy: trackByFn"></li>\n\n<ng-template ngFor let-item [ngForOf]="items" let-i="index" [ngForTrackBy]="trackByFn">\n  <li></li>\n</ng-template>',
    type: 'Basic',
  },
  {
    question: 'Values in ngFor',
    answer:
      '$implicit: T: The value of the individual items in the iterable (ngForOf).\nngForOf: NgIterable<T>: The value of the iterable expression. Useful when the expression is more complex then a property access, \nindex: number: The index of the current item in the iterable.\ncount: number: The length of the iterable.\nfirst: boolean: True when the item is the first item in the iterable.\nlast: boolean: True when the item is the last item in the iterable.\neven: boolean: True when the item has an even index in the iterable.\nodd: boolean: True when the item has an odd index in the iterable.',
    type: 'Basic',
  },
  {
    question: 'Change propagation',
    answer:
      'When the contents of the iterator changes, NgForOf makes the corresponding changes to the DOM:\n\nWhen an item is added, a new instance of the template is added to the DOM.\nWhen an item is removed, its template instance is removed from the DOM.\nWhen items are reordered, their respective templates are reordered in the DOM.',
    type: 'Advanced',
  },
  {
    question: 'Why do we need the Angular ngFor trackBy? ',
    answer:
      'The use of trackBy is to improve the performance of the angular application. It is usually not needed by default but needed only when your application running into performance issues.\n\nThe Angular ngFor directive may perform poorly with the large collections.  A small change to the collection such as adding a new item or removing an existing item from the collection may trigger a cascade of DOM manipulations.\n\nThe trackBy function will take two arguments, first is the index and the second one is the current item and it will return one unique identifier as return a value using which we can track that item. \n\nhttps://dotnettutorials.net/lesson/angular-ngfor-trackby/',
    Column3:
      'Use of trackBy:\n\nDoesnot destroy all elements instead update elements in DOM.\n\nUseful for arrays with lot of objects.',
    type: 'Advanced',
  },
  {
    question: 'Can we lazy load components? other than module',
    answer:
      'Yes. New feature in Angular 9\n\nhttps://johnpapa.net/angular-9-lazy-loading-components/',
    type: 'Basic',
  },
  {
    question: 'What are modules in angular 8?',
    answer:
      'In Angular, a module is a mechanism to group components, directives, pipes and services that are related, in such a way that can be combined with other modules to create an application. An Angular application can be thought of as a puzzle where each piece (or each module) is needed to be able to see the full picture.',
    type: 'Basic',
  },
  {
    type: 'Intermediate',
    question: 'Promise',
    answer:
      "In JavaScript, a promise is an API abstraction that allows you to handle asynchronous operations synchronously.\n\nvar promise = new Promise(function(resolve, reject) {\n  setTimeout(function() {\n    resolve('I promise to return this after 1 second!');\n  }, 1000);\n});\npromise.then(function(value) {\n  console.log(value);\n});",
    Column3:
      "You first create an instance of Promise and provide a function, called the executor, with two arguments - resolve and reject. In the body of the function, you put your asynchronous code. In this case, it's a simple timeout function that resolves the promise after one second.\n\nAfter creating the instance of the promise, you need to call its then() method with a function as an argument. This function will be executed when the promise is resolved. The then() method can take another function as the second argument which will be called when the promise is rejected",
  },
  {
    type: 'Intermediate',
    question: 'Observable',
    answer:
      'Angular Observable use as an interface to handle a variety of common asynchronous operations such as send observable data from child to parent component by defining custom events, handle AJAX or HTTP requests and responses, listen and respond user input in Angular Router and Forms.\n\npublic getStudents(): any {\n     const studentsObservable = new Observable(observer => {\n            setTimeout(() => {\n                observer.next(this.students);\n            }, 1000);\n     });\n\n     return studentsObservable;\n }\n\n\nconst studentsObservable = this.studentservice.getStudents();\n        studentsObservable.subscribe((studentsData: Student[]) => {\n            this.students = studentsData;\n        });',
    Column3:
      'next: Required. The handler for each delivered value called zero or more times after execution starts.\n\nerror: Optional. The handler for error notification. The error halts the execution of the observable instance.\n\ncomplete: Optional. The handler for an execution-complete notification.',
  },
  {
    type: 'Intermediate',
    question: 'Difference between Promise and Observable',
    answer: null,
    Column3:
      "If the result of an HTTP request to a server or some other expensive async operation isn't needed anymore, the Subscription of an Observable allows to cancel the subscription, while a Promise will eventually call the success or failed callback even when you don't need the notification or the result it provides anymore.",
  },
  {
    type: 'Advanced',
    question: 'RxJS ',
    answer:
      'Reactive programming is an asynchronous programming paradigm concerned with data streams and the propagation of change.RxJS (Reactive Extensions for JavaScript) is a library for reactive programming using observables that makes it easier to compose asynchronous or callback-based code.\n\nMapping values to different types\nFiltering streams\nComposing multiple streams',
  },
  {
    type: 'Advanced',
    question: 'Observable vs Subject',
    answer:
      '1) The subject is a special type of Observable. \n2) Observable is one of the base classes in RxJS and the Subject is one of its derived types. \n3) Subjects implement observer design pattern which is required to set some value i.e. this.Subject.next(message). Observable always need a subscription and implement the observable pattern. \n4) Observable is always unidirectional meaning it flows from source to subscriber. The subject is bidirectional, information flow from the source to the subscriber, and vice versa.',
    Column3: 'unicast vs multicast',
  },
  {
    type: 'Advanced',
    question: 'Types of Subject',
    answer: 'BehaviourSubject ,  ReplaySubject , AsyncSubject',
  },
  {
    type: 'Advanced',
    question: 'BehaviourSubject',
    answer:
      'A BehaviourSubject stores the latest value and immediately sends it to all subscribers.\nHelps for component commnuication.\nIt is bidirectional',
  },
  {
    type: 'Advanced',
    question: 'ReplaySubject',
    answer:
      'A replay subject stores n number of values and immediately sends it to the subscriber. i.e. in the above data service if we change messageSource as ReplaySubject and pass 3 then it will cache the last three values on subscription.',
  },
  {
    type: 'Advanced',
    question: 'AsyncSubject',
    answer:
      'Async subject waits until it completely and then sends the final value to the subscriber. The keyword here is the final value. If we add two values in the example “Hello 1” and “Hello Again”, When we do asyncsub.complete() then only last value will be printed. ',
  },
  {
    type: 'Advanced',
    question: 'Combining Observables into one Stream:',
    answer: ' MergeMap, concatMap, switchMap,flatMap, exhaustMap',
  },
  {
    type: 'Advanced',
    question: 'mergeMap',
    answer:
      'Creates new observables for any given source. All previous streams/observable keep alive. There is no order in the returned observables, moreover, the order is not preserved. The best use case for mergeMap is when combining a click event with API calls.',
  },
  {
    type: 'Advanced',
    question: 'concatMap',
    answer:
      'Similar to mergeMap but the order of observables is well preserved. Preserve the order and emits all observable value, works synchronously. Execute slowly because it works synchronously, waits for first observable to complete then only start new observables stream. The best use case is when you are calling an API which gives you id and that id is used in another API.',
  },
  {
    type: 'Advanced',
    question: 'switchMap',
    answer:
      'Immediately creates new observables and completes the old observables. The best use case for switchMap is search auto-complete. Whenever the user starts typing a new keyword for search, a new observable is created and the old one is completed. ',
  },
  {
    type: 'Advanced',
    question: 'flatMap',
    answer:
      ' Immediately creates observables and previous observables are kept alive. flatmap is an alias of mergemap, mergeMap accepts an optional parameter concurrency, which defines how many Observables can be subscribed at the same time.',
  },
  {
    type: 'Advanced',
    question: 'exhaustMap',
    answer:
      'Creates observable and waits for it until it complete. All other observable is ignored while waiting for the observable to complete. The best use case is to use the login in the Angular app. Once the user clicks on login then wait until authentication is done! exhaustMap is just the opposite of switchMap. switchMap immediately creates a new observable and completes the old ones however exhaustMap first completes the initial observable and ignores the new ones.',
  },
  {
    type: 'Advanced',
    question: 'NgRx ',
    answer: 'For state tracking. Concepts to know: action,store,selectors',
  },
  {
    type: 'Advanced',
    question: 'can we use angular1 and angular2 in same application',
    answer:
      'Angular 1 and Angular 2 CAN be used in the same application, using Angular2’s UpgradeAdapter and related services.\n\nThe ng-upgrade library will automatically make all of the Angular 1 injectables available in Angular 2. This means that your Angular 1 application services can now be injected anywhere in Angular 2 components or services.\n\nThe UpgradeModule will invoke the AngularJS $rootScope.$apply() after every turn of the Angular zone. This also triggers AngularJS change detection after every event.\n\nTo bootstrap a hybrid application, you must bootstrap each of the Angular and AngularJS parts of the application. You must bootstrap the Angular bits first and then ask the UpgradeModule to bootstrap the AngularJS bits next.',
  },
  {
    type: 'Basic',
    question: 'Dependency Injection',
    answer:
      "In Angular, the most common pattern for calling another class or function is through dependency injection.\nIn Angular, the DI framework provides declared dependencies to a class when that class is instantiated. \nThe DI framework lets you supply data to a component from an injectable service class, defined in its own file. \n\nEg:\nimport { Injectable } from '@angular/core';\n\n@Injectable({\n  providedIn: 'root',\n})\nexport class HeroService {\n  constructor() { }\n}\n\nYou can tell Angular to inject a dependency in a component's constructor by specifying a constructor parameter with the dependency type. ",
  },
  {
    type: 'Advanced',
    question: 'Change Detection',
    answer:
      "The scope.$apply() is how AngularJS detects changes and updates data bindings. After every event that occurs, scope.$apply() gets called. This is done either automatically by the framework, or manually by you.\n\nIn Angular things are different. While change detection still occurs after every event, no one needs to call scope.$apply() for that to happen. This is because all Angular code runs inside something called the Angular zone. Angular always knows when the code finishes, so it also knows when it should kick off change detection. The code itself doesn't have to call scope.$apply() or anything like it.",
  },
  {
    type: 'Advanced',
    question: 'Content projection',
    answer:
      'Content projection allows you to insert a shadow DOM in your component. To put it simply, if you want to insert HTML elements or other components in a component, then you do that using the concept of content projection. In Angular, you achieve content projection using < ng-content >< /ng-content >.  You can make reusable components and scalable applications by properly using content projection.\n\nhttps://dzone.com/articles/simplifying-content-projection-in-angular',
  },
  {
    type: 'Intermediate',
    question: 'Difference between Constructor and ngOnInit\n',
    answer:
      'The Constructor is a default method of the class that is executed when the class is instantiated and ensures proper initialisation of fields in the class and its subclasses. Angular, or better Dependency Injector (DI), analyses the constructor parameters and when it creates a new instance by calling new MyClass() it tries to find providers that match the types of the constructor parameters, resolves them and passes them to the constructor like.\n\nuse constructor() to setup Dependency Injection.use ngOnInit for all the initialization/declaration and avoid stuff to work in the constructor\n\nngOnInit is a life cycle hook called by Angular to indicate that Angular is done creating the component.\nWe have to import OnInit from angular/core in order to use it (actually implementing OnInit is not mandatory but considered good practice)',
  },
  {
    type: 'Advanced',
    question: 'forkJoin()',
    answer:
      'To handle multiple calls at the same time, where you can call multiple request and after subscribing you will get an array of response.\nThe forkJoin() operator allows us to take a list of Observables and\nexecute them in parallel.\nOnce every Observable in the list emits a value, the forkJoin will\nemit a single Observable value containing a list of all the resolved values from the Observables in the list.',
  },
  {
    type: 'Intermediate',
    question: 'Angular bootstrap',
    answer:
      'Angular bootstrap process consists of the two major stages:\n\nconstructing components tree\nrunning change detection\n\nThe constructor of the component is called when Angular constructs components tree. All lifecycle hooks are called as part of running change detection.\n\nEg: The @Input communication mechanism is processed during change detection so you cannot expect to have the properties available in the constructor. It will be available on after ngOnInit',
  },
  {
    type: 'Basic',
    question: 'Angular Router Gaurd',
    answer:
      'An Angular allows us to protect routes with guards. Route guards in Angular are a way of protecting navigation by allowing or denying a route based on the condition we supply. \n\nhttps://edupala.com/angular-router-guard-auth-guard/',
  },
  {
    type: 'Basic',
    question: 'Different types of angular router guard',
    answer:
      'CanActivate: Checks to see if we can visit a route based on condition.\nCanActivateChild: Checks to see if we can visit route children based on condition.\nCanDeactivate: Prevent the user from navigating away from the current content based on condition.\ncanLoad:Used to determine whether the user can navigate to a lazy loaded module prior to loading it\nResolve: Delay navigation until a task is complete before route activate.',
  },
  {
    type: 'Intermediate',
    question: 'Metadatas of component and injectable',
    answer:
      'selector - The CSS selector that identifies this directive in a template and triggers instantiation of the directive\nproviders - Configures the injector of this directive or component with a token that maps to a provider of a dependency\nexportAs - Defines the name that can be used in the template to assign this directive to a variable\ntemplate - (string) - An inline template for an Angular component \ntemplateUrl - (string[]) - The relative path or absolute URL of a template file for an Angular component. \nstyles -  (string[]) - One or more inline CSS stylesheets to use in this component \nstyleUrls - (string[]) - One or more relative paths or absolute URLs for files containing CSS stylesheets to use in this component\nanimations - (any[]) - One or more animation trigger() calls, containing state() and transition() definitions\nencapsulation - An encapsulation policy for the template and CSS styles\nmoduleId - (string)  -  The module ID of the module that contains the component\nviewProviders - (Provider[]) - Defines the set of injectable objects that are visible to its view DOM children\nchangeDetection- (ChangeDetectionStrategy) - The change-detection strategy to use for this component\ninterpolation - Overrides the default encapsulation start and end delimiters ({{ and }})\npreserveWhitespaces - boolean - True to preserve or false to remove potentially superfluous whitespace characters from the compiled template. Whitespace characters are those matching the \\s character class in JavaScript regular expressions. Default is false, unless overridden in compiler options.',
  },
  {
    type: 'Advanced',
    question: 'Ivy in angular',
    answer:
      "Ivy is the code name for Angular's next-generation compilation and rendering pipeline. With the version 9 release of Angular, the new compiler and runtime instructions are used by default instead of the older compiler and runtime, known as View Engine.",
  },
  {
    type: 'Advanced',
    question: 'Rxjs operators - Taken, Takeuntil, takewhile',
    answer: ' https://link.medium.com/jfAytrKBnab',
  },
  {
    type: 'Intermediate',
    question: 'Unsubscribing observables',
    answer: ' https://link.medium.com/jfAytrKBnab',
  },
  {
    type: 'Advanced',
    question:
      'Why insert service in provider? Can we use service without inserting in provider?',
    answer: null,
  },
  {
    type: 'Intermediate',
    question: 'Uses of angular JSON',
    answer: null,
  },
  {
    type: 'Intermediate',
    question: 'Where can we insert external stylesheet',
    answer: null,
  },
  {
    type: 'Intermediate',
    question: 'How can we set environments in angular json',
    answer: null,
  },
  {
    type: 'Intermediate',
    question: 'How canActivate works in router?',
    answer: null,
  },
  {
    type: 'Intermediate',
    question: 'Angular authentication process',
    answer:
      'The Angular authentication process is as follows: \n\nAn authentication API receives user credentials and validates it. The authentication API is present on the server. Once the validation has been done, a JSON web token is reinstated containing information about the current user. JSON web token is then used to identify the user. ',
  },
  {
    type: 'Intermediate',
    question: 'authorization',
    answer:
      'The process or method restricting the access of users is called authorization. Once a user is logged in after authentication, he or she has a certain level of access. This level of access can be configured for different users. This is what we call Angular authorization.',
  },
  {
    type: 'Intermediate',
    question: 'filters',
    answer:
      'The filters in Angular are as follows:\n\njson\nlimitTo \ncurrency \norderBy\ndate \nfilter \nlowercase\nnumber',
  },
  {
    type: 'Intermediate',
    question: 'MVVM architecture',
    answer:
      'The MVVM architecture plays a significant role in eliminating tight coupling between the components. This architecture includes the following three parts:\n\nModel: The model represents the business logic and data of a particular application. In other words, it consists of an entity structure. The model has the business logic, including model classes, remote and local data sources, and the repository.\nView: View is the application’s visual layer that comprises the UI code. The view sends the action of the user to the ViewModel. However, it does not receive the response directly. The view must subscribe to the observables that are exposed to it by the ViewModel to receive a response.\nViewModel: ViewModel is the application’s abstract layer that connects the View and the Model and acts as a bridge between the two. It does not know which View needs to be made use of since it does not have any direct access to the View. The two are connected using data binding, and the ViewModel records all the changes that are made to the View and makes the necessary changes to the Model.',
  },
  {
    type: 'Intermediate',
    question: 'SPA',
    answer:
      'SPA stands for Single Page Application. This technology only maintains one page, index.HTML, even when the URL changes constantly. SPA technology is easy to build and extremely fast in comparison to traditional web technology.',
  },
  {
    type: 'Intermediate',
    question:
      'What is the difference between interpolated content and the content assigned to the innerHTML property of a DOM element?',
    answer:
      'Angular interpolation happens when in our template we type some JavaScript expression inside double curly braces ‘{{ someExpression() }}’. This is used to add dynamic content to a web page. However, we can do the same by assigning some dynamic content to the innerHTML property of a DOM element. The difference between the two is that, in Angular, the compiler always escapes the interpolated content, i.e., HTML is not interpreted, and the browser displays the code as it is with brackets and symbols, rather than displaying the output of the interpreted HTML. However, in innerHTML, if the content is HTML, then it is interpreted as the HTML code.',
  },
  {
    type: 'Intermediate',
    question: 'Async pipe',
    answer:
      'The async pipe subscribes to an Observable or Promise and returns the latest value it has emitted. When a new value is emitted, the async pipe marks the component to be checked for changes. When the component gets destroyed, the async pipe unsubscribes automatically to avoid potential memory leaks.',
  },
  {
    type: 'Advanced',
    question: 'Caching HTTP Requests with RxJS in Angular\n',
    answer:
      "Sometimes we need to cache our Http Requests. Especially when we are calling the same endpoints within a given time period a couple of times.\n\nconst URL = 'https://api.punkapi.com/v2/beers';\n@Injectable({\n  providedIn: 'root'\n})\nexport class HttpService {\n  public responseCache = new Map();\nconstructor(private http: HttpClient) {}\npublic getBeerList(): Observable<any> {\n    const beersFromCache = this.responseCache.get(URL);\n    if (beersFromCache) {\n      return of(beersFromCache);\n    }\n    const response = this.http.get<any>(URL);\n    response.subscribe(beers => this.responseCache.set(URL, beers));\n    return response;\n  }\n}",
  },
  {
    type: 'Advanced',
    question: 'Angular Universal',
    answer:
      'Angular Universal also known as server-side rendering is tool which allows server to pre-render Angular application while user hits your website for first time.\n\nServer-side rendering has bunch of benefits for SEO, performance, and accesibility of your web-app!',
  },
].map((element) => ({
  ...element,
  //   isFlipped: false,
  category: Category[Category.Angular],
}));
