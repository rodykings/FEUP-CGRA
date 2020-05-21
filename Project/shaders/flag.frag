#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D flagTexture;

varying vec2 vTextureCoord;

void main() {
	vec4 color = texture2D(flagTexture, vTextureCoord);

	gl_FragColor = color;
}