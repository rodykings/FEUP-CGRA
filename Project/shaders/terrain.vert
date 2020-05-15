attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

uniform float timeFactor;

uniform sampler2D uSampler;
uniform sampler2D uSampler2;

varying vec2 vTextureCoord;

void main() {


    vec3 offSet;
    offSet = vec3(0.0, 0.0,0.07 * texture2D(uSampler2, aTextureCoord + timeFactor*vec2(0.005, 0.005)).b);

    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + offSet, 1.0);

    vTextureCoord = aTextureCoord;

}

