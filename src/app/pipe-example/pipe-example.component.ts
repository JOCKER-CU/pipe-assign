import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrl: './pipe-example.component.css',
  
})
export class PipeExampleComponent {

  text: string = 'hello Pipe';
  today: number = Date.now();
  price: number = 1234.56;
  name: string = 'Joker';

  inputvalue: any;

  paragraph = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cumque inventore fugiat maiores enim voluptate tempore, praesentium architecto culpa debitis. Provident eius quisquam similique asperiores ullam doloribus! Quia, officiis officia! 
        `;
  
  htmltext = `<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`;
  
}
